import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Inject, Logger, OnModuleInit } from '@nestjs/common';
import { EBullEvent, EBullQueue, decryptData } from '@libs/core';
import { BookingProto, MerchantProto, UserProto } from '@libs/grpc-types';
import { MessageComponent, BullQueueProvider, SecretsService } from '@libs/modules';
import { ClientGrpc } from '@nestjs/microservices';
import { DeviceRepository, MerchantRepository, UserModel } from '@libs/database';
import { EUserRole } from '@libs/grpc-types/protos/commons';

import { MailService } from '../mailer/mailer.service';

import { ELangType } from '@/api-gateway/dtos';
import { FirebaseService } from '@/notification-service/firebase/firebase.service';

interface TokenRegs {
  userTokens?: string[];
  adminTokens?: string[];
}

@Processor(EBullQueue.NOTIFICATION_QUEUE)
export class NotificationProcessor implements OnModuleInit {
  private readonly logger = new Logger(this.constructor.name);

  private userService: UserProto.UserServiceClient;
  private merchantService: MerchantProto.MerchantServiceClient;
  private bookingService: BookingProto.BookingServiceClient;

  constructor(
    private readonly mailService: MailService,
    private readonly i18n: MessageComponent,
    private readonly bullQueueProvider: BullQueueProvider,
    @Inject(UserProto.DUCPH_USER_PACKAGE_NAME) private userClient: ClientGrpc,
    @Inject(MerchantProto.MERCHANT_PACKAGE_NAME) private merchantClient: ClientGrpc,
    @Inject(BookingProto.BOOKING_PACKAGE_NAME) private bookingClient: ClientGrpc,
    private readonly firebaseService: FirebaseService,
    private readonly deviceRepository: DeviceRepository,
    private readonly merchantRepository: MerchantRepository,
    private readonly configService: SecretsService,
  ) {}

  onModuleInit() {
    this.userService = this.userClient.getService<UserProto.UserServiceClient>(UserProto.USER_SERVICE_NAME);
    this.merchantService = this.merchantClient.getService<MerchantProto.MerchantServiceClient>(
      MerchantProto.MERCHANT_SERVICE_NAME,
    );
    this.bookingService = this.bookingClient.getService<BookingProto.BookingServiceClient>(
      BookingProto.BOOKING_SERVICE_NAME,
    );
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug(`Processing job ${job.id} of type ${job.name}. Data: ${JSON.stringify(job.data)}`);
  }

  @OnQueueCompleted()
  onComplete(job: Job, result: any) {
    this.logger.debug(`Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(result)}`);
  }

  @OnQueueFailed()
  onError(job: Job<any>, error: any) {
    this.logger.error(`Failed job ${job.id} of type ${job.name}: ${error.message}`, error.stack);
  }

  @Process(EBullEvent.NOTIFICATION_SEND_EMAIL_BOOKING_EVENT)
  async handleSendMailBookingSuccess(job: Job<any>) {
    const request = job.data;
    const { merchant } = await this.merchantService.findById({ id: request.merchantId }).toPromise();
    const { branch } = await this.merchantService.findBranchById({ id: request.branchId }).toPromise();
    const { user: admin } = await this.userService.findById({ id: merchant.userId }).toPromise();
    const { user: customer } = await this.userService.findById({ id: request.userId }).toPromise();

    const titleEn = this.i18n.lang('lang.NOTIFICATION.CREATE.BOOKING.SUCCESS', {
      lang: ELangType.EN,
    });

    const titleVi = this.i18n.lang('lang.NOTIFICATION.CREATE.BOOKING.SUCCESS', {
      lang: ELangType.VI,
    });

    await Promise.all([
      this.mailService.sendSuccessBookingAdminBranchEmail({
        customerEmail: customer.email,
        customerName: customer.fullName,
        startTime: request.startTime,
        bookingDate: request.bookingDate,
        customerPhoneNumber: customer.phoneNumber,
        adminBranchEmail: admin.email,
        name: branch.name,
        phone: branch.phone,
        address: branch.address,
        subject: admin.lang ? titleEn : titleVi,
        lang: admin?.lang,
      }),
    ]);
  }

  @Process(EBullEvent.NOTIFICATION_SEND_EMAIL_MERCHANT_ADD_OPERATOR)
  async handleSendMailMerchantAddOperator(job: Job<any>) {
    const request = job.data;

    await this.mailService.sendMerchantAddEmployeeEmail({
      email: request?.email,
      name: request?.fullName,
      password: request?.password,
      lang: request?.lang,
    });
  }

  @Process(EBullEvent.NS_NEW_BOOKING)
  async handleNewBooking(job: Job<any>) {
    const request = job.data;
    // insert booking notification to admin/customer notification database

    await this.bullQueueProvider.addGatewayEvent('user_booking', { userId: request.userId, booking: request.booking });

    const merchant = await this.merchantRepository.findById(request.merchantId);

    const userDevices = await this.deviceRepository.find({
      where: {
        userId: {
          _or: [
            {
              _eq: request.userId,
            },
            {
              _eq: merchant.userId,
            },
          ],
        },
      },
      attributes: ['token'],
      include: [
        {
          model: UserModel,
          attributes: ['role'],
        },
      ],
    });

    const tokens = userDevices.reduce(
      (acc, curr) => {
        if (curr.toJSON()?.user.role === EUserRole.USER && curr.token) {
          acc.userTokens.push(curr.token);
        } else if (curr.toJSON()?.user.role === EUserRole.ADMIN && curr.token) {
          acc.adminTokens.push(curr.token);
        }
        return acc;
      },
      { userTokens: [], adminTokens: [] } as TokenRegs,
    );

    const userPayloadBookingNotification = {
      data: {
        title: 'Đặt lịch hẹn thành công',
        body: `Bạn vừa đặt lịch hẹn chăm sóc sức khỏe tại ${merchant.name} thành công`,
      },
      notification: {
        title: 'Đặt lịch hẹn thành công',
        body: `Bạn vừa đặt lịch hẹn chăm sóc sức khỏe tại ${merchant.name} thành công`,
      },
    };

    const adminPayloadBookingNotification = {
      data: {
        title: 'Khách hàng đặt lịch hẹn',
        body: 'Cửa hàng vừa mới có lịch hẹn mới. Vui lòng xem chi tiết tại đây',
      },
      notification: {
        title: 'Khách hàng đặt lịch hẹn',
        body: 'Cửa hàng vừa mới có lịch hẹn mới. Vui lòng xem chi tiết tại đây',
      },
    };
    try {
      await Promise.all([
        tokens.userTokens.length
          ? this.firebaseService.sendToDevices(tokens.userTokens, userPayloadBookingNotification)
          : null,
        tokens.adminTokens.length
          ? this.firebaseService.sendToDevices(tokens.adminTokens, adminPayloadBookingNotification)
          : null,
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  @Process(EBullEvent.SEND_EMAIL_VERIFY_OTP)
  async handleSendMailRegisterMerchantVerifyOtp(job: Job<any>) {
    const { userId, email, generatedOtp } = job.data;

    // TODO: Update user status as well as merchant, branch status when send verify OTP

    await this.mailService.sendMerchantRegisterMerchantOtp({
      email,
      generatedOtp,
    });
  }

  @Process(EBullEvent.SEND_MESSAGE)
  async handlePushNotificationSendMessage(job: Job<any>) {
    const { receiverId, senderId, message } = job.data;

    const userDevices = await this.deviceRepository.find({
      where: {
        userId: receiverId,
      },
      attributes: ['token'],
    });

    const tokens = userDevices.reduce((acc, device) => {
      if (device.token) acc.push(device.token);
      return acc;
    }, [] as string[]);

    const decryptMessage = decryptData(message.content, this.configService.aesKey);

    const userPayloadBookingNotification = {
      data: {
        title: 'Bạn có tin nhắn mới',
        body: `${message.senderName}: ${decryptMessage}`,
      },
      notification: {
        title: 'Bạn có tin nhắn mới',
        body: `${message.senderName}: ${decryptMessage}`,
      },
    };

    try {
      if (tokens.length) {
        this.firebaseService.sendToDevices(tokens, userPayloadBookingNotification);
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Process(EBullEvent.MERCHANT_FORGOT_PASSWORD_REQUEST)
  async handleForgotPasswordMerchantRequest(job: Job<any>) {
    const { email, baseUrl, token } = job.data;
    const url = `${baseUrl}/reset-password?token=${token}`;

    await this.mailService.sendForgotPasswordMerchantRequestEmail({
      email,
      url,
    });
  }
}
