import { ErrorHelper } from '@libs/core';
import { UserModel } from '@libs/database/entities';
import { PaymentProto } from '@libs/grpc-types';
import { EUserRole } from '@libs/grpc-types/protos/commons';
import { MessageComponent } from '@libs/modules';
import { Injectable, Logger } from '@nestjs/common';
import { isEmpty, merge } from 'lodash';

import { PaymentCommonService } from '../payment-common/payment-common.service';

import { CreatePaymentInput } from '@/api-gateway/dtos';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly paymentService: PaymentCommonService, private readonly i18n: MessageComponent) {}

  async create(user: UserModel, data: CreatePaymentInput, ip: string, lang?: string) {
    if (user.role === EUserRole.USER) {
      merge(data, {
        userId: user.id,
      });
    }

    const payment = await this.paymentService.create({ ...data, ip });

    return {
      message: this.i18n.lang('lang.PAYMENT.CREATE.SUCCESS', { lang }),
      payment,
    };
  }

  async update(id: number, data: PaymentProto.UpdatePaymentData, lang?: string) {
    const { payment } = await this.paymentService.findById({ id });

    if (isEmpty(payment)) {
      this.logger.error(`Booking is not found`);
      ErrorHelper.HttpNotFoundException(this.i18n.lang('lang.PAYMENT.READ.NOT_EXIST', { lang }));
    }

    const updatedBooking = await this.paymentService.update(id, data);

    return {
      message: this.i18n.lang('lang.PAYMENT.UPDATE.SUCCESS', { lang }),
      booking: updatedBooking,
    };
  }

  async delete(id: number, lang?: string) {
    const result = await this.paymentService.delete(id);

    return {
      message: this.i18n.lang('lang.PAYMENT.DELETE.SUCCESS', { lang }),
      result,
    };
  }

  async findDetail(id: number, lang?: string) {
    const { payment } = await this.paymentService.findById({ id });

    return {
      payment,
    };
  }

  async callback(query: any, body: string) {
    const payment = await this.paymentService.callback(query, body);

    return {
      payment,
    };
  }
}
