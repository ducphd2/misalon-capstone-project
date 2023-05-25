import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Inject, Logger, OnModuleInit } from '@nestjs/common';
import { EBullEvent, EBullQueue } from '@libs/core';
import { BookingProto, MerchantProto, UserProto } from '@libs/grpc-types';
import { MessageComponent, BullQueueProvider } from '@libs/modules';
import { ClientGrpc } from '@nestjs/microservices';

import { MailService } from '../mailer/mailer.service';

import { ELangType } from '@/api-gateway/dtos';

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
      this.mailService.sendSuccessBookingUserEmail({
        email: customer.email,
        bookingDate: request.bookingDate,
        startTime: request.startTime,
        name: branch.name,
        address: branch.address,
        phone: branch.phone,
        lang: customer.lang,
        note: request?.note,
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
    console.log('Must to implement handle new booking notification in email, push notification in react and mobile');
  }
}
