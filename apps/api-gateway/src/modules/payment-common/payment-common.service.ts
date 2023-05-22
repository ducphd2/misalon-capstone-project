import { CreateBookingInput, UpdateBookingData } from '@libs/grpc-types/protos/booking';
import { Id, QueryRequest } from '@libs/grpc-types/protos/commons';
import { PAYMENT_PACKAGE_NAME, PAYMENT_SERVICE_NAME, PaymentServiceClient } from '@libs/grpc-types/protos/payment';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { isEmpty, merge } from 'lodash';
import { firstValueFrom } from 'rxjs';
import { PaymentProto } from '@libs/grpc-types';

import { BaseQueryDto } from '@/api-gateway/dtos';

@Injectable()
export class PaymentCommonService implements OnModuleInit {
  private paymentService: PaymentServiceClient;

  constructor(@Inject(PAYMENT_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.paymentService = this.client.getService<PaymentServiceClient>(PAYMENT_SERVICE_NAME);
  }

  async create(data: PaymentProto.CreatePaymentInput) {
    return await firstValueFrom(this.paymentService.create(data));
  }

  async findById(id: Id) {
    return await firstValueFrom(this.paymentService.findById(id));
  }

  async find(query: QueryRequest) {
    return await firstValueFrom(this.paymentService.find(query));
  }

  async findAll(query: QueryRequest) {
    return await firstValueFrom(this.paymentService.findAll(query));
  }

  async update(id: number, data: PaymentProto.UpdatePaymentData) {
    return await firstValueFrom(this.paymentService.update({ id, data }));
  }

  async delete(id: number) {
    return await firstValueFrom(this.paymentService.delete({ id }));
  }

  async findPayments(query?: BaseQueryDto, merchantId?: number) {
    let where = null;

    if (merchantId) {
      where = {
        merchantId,
      };
    }

    if (!isEmpty(query?.q)) {
      merge(where, {
        search: {
          _iLike: `%${query?.q}%`,
        },
      });
    }

    const result = await this.find({
      ...query,
      where: where ? JSON.stringify(where) : null,
    });

    return result;
  }

  async callback(query: string, body: string) {
    return await firstValueFrom(
      this.paymentService.callback({
        query,
        body,
      }),
    );
  }
}
