import { createHmac } from 'node:crypto';

import { EBullEvent, EVnPayCommand } from '@libs/core';
import { BookingRepository, PaymentRepository } from '@libs/database';
import { CommonProto, PaymentProto } from '@libs/grpc-types';
import { EBookingStatus } from '@libs/grpc-types/protos/commons';
import { EPaymentStatus, EPaymentType } from '@libs/grpc-types/protos/payment';
import { IVnPayParams } from '@libs/interfaces';
import { BullQueueProvider } from '@libs/modules';
import { SecretsService } from '@libs/modules/global/secrets/service';
import { Injectable, Logger } from '@nestjs/common';
import { isEmpty } from 'lodash';
import * as moment from 'moment';
import * as qs from 'qs';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(this.constructor.name);

  constructor(
    private readonly paymentRepository: PaymentRepository,
    private readonly bullQueue: BullQueueProvider,
    private readonly configService: SecretsService,
    private readonly bookingRepository: BookingRepository,
  ) {}

  async create(dto: PaymentProto.CreatePaymentInput) {
    // const existedPayment = await this.bookingRepository.find({
    //   where: {
    //     id: {
    //       _in: dto.bookingIds,
    //     },
    //     userId: dto.userId,
    //   },
    // });

    // if (existedPayment.length) {
    //   ErrorHelper.BadRequestException('That booking has already paid');
    // }

    if (dto.type === EPaymentType.CASH) {
      const payment = await this.paymentRepository.create(dto);

      await this.bullQueue.addBookingEvent(EBullEvent.MAKE_PAYMENT_BOOKING, {
        status: EBookingStatus.BOOKING_PAYMENT_FINISHED,
        bookingIds: dto.bookingIds,
        paymentId: payment.id,
      });

      return payment;
    } else {
      const payment = await this.paymentRepository.create({ ...dto, status: EPaymentStatus.PENDING });

      const vnpUrl = this.makeVnPayUrl(dto, payment);

      await this.bullQueue.addBookingEvent(EBullEvent.MAKE_PAYMENT_BOOKING, {
        status: EBookingStatus.BOOKING_PAYMENT_PENDING,
        bookingIds: dto.bookingIds,
        paymentId: payment.id,
      });

      await this.bullQueue.addBookingEvent(
        EBullEvent.WAIT_FOR_MAKE_PAYMENT_BOOKING,
        {
          bookingIds: dto.bookingIds,
          paymentId: payment.id,
        },
        {
          delay: 15 * 60 * 1000, // 15 minutes in milliseconds
        },
      );

      return {
        ...payment,
        vnpUrl,
      };
    }
  }

  async find(request: CommonProto.QueryRequest) {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.paymentRepository.find({
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

  private makeVnPayUrl(dto: PaymentProto.CreatePaymentInput, payment: any): string {
    const date = new Date();
    const createDate = moment(date).format('yyyyMMDDHHmmss');
    let vnPayParams: IVnPayParams = {} as IVnPayParams;

    vnPayParams.vnp_Version = this.configService.vnpVersion;
    vnPayParams.vnp_TmnCode = this.configService.vnpTmnCode;
    vnPayParams.vnp_Locale = this.configService.vnpLocale;
    vnPayParams.vnp_CurrCode = this.configService.vnpCurrCode;
    vnPayParams.vnp_ReturnUrl = dto.vnpayUrl || this.configService.vnpReturnUrl;

    vnPayParams.vnp_IpAddr = dto.ip;
    vnPayParams.vnp_Command = EVnPayCommand.PAY;
    vnPayParams.vnp_OrderInfo = `Thanh toan hoa don, so tien: ${dto.totalPrice}`;
    vnPayParams.vnp_OrderType = EVnPayCommand.PAY;
    vnPayParams.vnp_Amount = dto.totalPrice * 100;
    vnPayParams.vnp_CreateDate = createDate;
    vnPayParams.vnp_TxnRef = payment.code;

    vnPayParams = this.sortObject(vnPayParams);

    const signData = qs.stringify(vnPayParams, { encode: false });

    const signed = this.makeSignedHash(this.configService.vnpSecretKey, signData);

    vnPayParams.vnp_SecureHash = signed;

    const vnpUrl = this.configService.vnpUrl + '?' + qs.stringify(vnPayParams, { encode: false });

    return vnpUrl;
  }

  private makeSignedHash(secret: string, signData: string) {
    const hmac = createHmac('sha512', secret);

    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');
    return signed;
  }

  checkPaymentStatus(vnpResponse: IVnPayParams) {
    let vnpParams = vnpResponse;
    const secureHash = vnpParams.vnp_SecureHash;
    delete vnpParams.vnp_SecureHash;
    delete vnpParams.vnp_SecureHashType;

    vnpParams = this.sortObject(vnpParams);

    const signData = qs.stringify(vnpParams, { encode: false });

    const signed = this.makeSignedHash(this.configService.vnpSecretKey, signData);

    if (secureHash === signed && vnpParams.vnp_TransactionStatus === '00') return true;
    return false;
  }

  async handleCallbackVnPay(query: IVnPayParams) {
    const isSuccess = this.checkPaymentStatus(query);

    this.logger.log(`handleCallbackVnPay: check status: ${isSuccess}`);

    if (isSuccess) {
      const result = await this.paymentRepository.update(
        {
          status: EPaymentStatus.FINISHED,
          vnpBankCode: query?.vnp_BankCode,
          vnpBankTranNo: query?.vnp_BankTranNo,
          vnpCardType: query?.vnp_CardType,
          vnpPayDate: query?.vnp_PayDate,
          vnpOrderInfo: query?.vnp_OrderInfo,
          vnpTransactionNo: query?.vnp_TransactionNo,
        },
        {
          where: {
            code: query.vnp_TxnRef,
          },
        },
      );

      await this.bullQueue.addBookingEvent(EBullEvent.UPDATE_VNPAY_BOOKINGS, {
        status: EBookingStatus.BOOKING_PAYMENT_FINISHED,
        code: query.vnp_TxnRef,
      });

      return result[0];
    } else {
      const result = await this.paymentRepository.update(
        {
          status: EPaymentStatus.FAILED,
        },
        {
          where: {
            code: query.vnp_TxnRef,
          },
        },
      );

      await this.bullQueue.addBookingEvent(EBullEvent.UPDATE_VNPAY_BOOKINGS, {
        status: EBookingStatus.BOOKING_PAYMENT_FAILED,
        code: query.vnp_TxnRef,
      });

      return result[0];
    }
  }
}
