import { createHmac } from 'node:crypto';

import { EBullEvent, EVnPayCommand } from '@libs/core';
import { PaymentRepository } from '@libs/database';
import { CommonProto, NotificationProto, PaymentProto } from '@libs/grpc-types';
import { EBookingStatus } from '@libs/grpc-types/protos/commons';
import { EPaymentType } from '@libs/grpc-types/protos/payment';
import { IVnPayParams } from '@libs/interfaces';
import { BullQueueProvider } from '@libs/modules';
import { SecretsService } from '@libs/modules/global/secrets/service';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { isEmpty } from 'lodash';
import * as moment from 'moment';
import * as qs from 'qs';

@Injectable()
export class PaymentService implements OnModuleInit {
  private notificationService: NotificationProto.NotificationServiceClient;

  constructor(
    private readonly paymentRepository: PaymentRepository,
    private readonly bullQueue: BullQueueProvider,
    private readonly configService: SecretsService,
    @Inject(NotificationProto.NOTIFICATION_PACKAGE_NAME) private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.notificationService = this.client.getService<NotificationProto.NotificationServiceClient>(
      NotificationProto.NOTIFICATION_SERVICE_NAME,
    );
  }

  async create(dto: PaymentProto.CreatePaymentInput) {
    let payment = null;
    let vnpUrl: string = null;

    if (dto.type === EPaymentType.CASH) {
      payment = await this.paymentRepository.create(dto);
    } else {
      payment = await this.paymentRepository.create(dto);

      vnpUrl = this.makeVnPayUrl(dto, payment);
    }

    await this.bullQueue.addBookingEvent(EBullEvent.MAKE_PAYMENT_BOOKING, {
      status: EBookingStatus.BOOKING_FINISHED,
      id: dto.bookingId,
    });

    return {
      ...payment,
      vnpUrl,
    };
  }

  async find(request: CommonProto.QueryRequest) {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.paymentRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result;
  }

  async findWithPaging(request: CommonProto.QueryRequest) {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.paymentRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result;
  }

  async findById(id: number) {
    const payment = await this.paymentRepository.findById(id);
    return { payment };
  }

  async findOne(dto: CommonProto.QueryRequest) {
    const where = !isEmpty(dto.where) ? JSON.parse(dto.where) : undefined;

    const result = await this.paymentRepository.findOne({
      ...dto,
      where,
      raw: true,
    });

    return result;
  }

  async delete(id: number): Promise<number> {
    const count = await this.paymentRepository.delete({
      where: { id },
    });

    return count;
  }

  async update(request: PaymentProto.UpdatePaymentInput) {
    const result = await this.paymentRepository.update(request.data, {
      where: {
        id: request.id,
      },
    });
    return result[0];
  }

  async count(query: CommonProto.QueryRequest): Promise<number> {
    const result = await this.paymentRepository.count({
      where: query.where ? JSON.parse(query.where) : null,
    });

    return result;
  }

  private sortObject(obj) {
    const sorted: any = {};

    const str: any = [];

    let key;

    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key));
      }
    }

    str.sort();

    for (key = 0; key < str.length; key++) {
      sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
    }

    return sorted;
  }

  private makeVnPayUrl(dto: any, payment: any): string {
    const date = new Date();
    const createDate = moment(date).format('yyyyMMDDHHmmss');
    let vnPayParams: IVnPayParams = {} as IVnPayParams;

    vnPayParams.vnp_Version = this.configService.vnpVersion;
    vnPayParams.vnp_TmnCode = this.configService.vnpTmnCode;
    vnPayParams.vnp_Locale = this.configService.vnpLocale;
    vnPayParams.vnp_CurrCode = this.configService.vnpCurrCode;
    vnPayParams.vnp_ReturnUrl = this.configService.vnpReturnUrl;

    vnPayParams.vnp_IpAddr = dto.ip;
    vnPayParams.vnp_Command = EVnPayCommand.PAY;
    vnPayParams.vnp_OrderInfo = `Thanh toan hoa don, so tien: ${dto.totalPrice}`;
    vnPayParams.vnp_OrderType = EVnPayCommand.PAY;
    vnPayParams.vnp_Amount = dto.totalPrice * 100;
    vnPayParams.vnp_CreateDate = createDate;
    vnPayParams.vnp_TxnRef = payment.code;

    vnPayParams = this.sortObject(vnPayParams);

    const signData = qs.stringify(vnPayParams);

    const hmac = createHmac('sha512', this.configService.vnpSecretKey);

    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

    vnPayParams.vnp_SecureHash = signed;

    const vnpUrl = this.configService.vnpUrl + '?' + qs.stringify(vnPayParams);

    return vnpUrl;
  }
}
