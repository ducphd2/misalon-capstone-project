import { PaymentProto } from '@libs/grpc-types';
import { Count, Id, QueryRequest } from '@libs/grpc-types/protos/commons';
import { GrpcLogInterceptor } from '@libs/interceptors';
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';

import { PaymentService } from './payment.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller()
@PaymentProto.PaymentServiceControllerMethods()
export class PaymentController implements PaymentProto.PaymentServiceController {
  constructor(private readonly bookingService: PaymentService) {}

  async find(request: QueryRequest): Promise<PaymentProto.PaymentPagination> {
    return await this.bookingService.find(request);
  }

  async findById(request: Id): Promise<PaymentProto.NullablePayment> {
    return await this.bookingService.findById(request.id);
  }

  async findOne(request: QueryRequest): Promise<PaymentProto.NullablePayment> {
    const booking = await this.bookingService.findOne(request);
    return { booking };
  }

  async count(request: QueryRequest): Promise<Count> {
    const count = await this.bookingService.count(request);
    return { count };
  }

  async create(request: PaymentProto.CreatePaymentInput): Promise<PaymentProto.Payment> {
    const result = await this.bookingService.create(request);

    return result;
  }

  async update(request: PaymentProto.UpdatePaymentInput): Promise<PaymentProto.Payment> {
    return await this.bookingService.update(request);
  }

  async delete(request: Id): Promise<Count> {
    const count = await this.bookingService.delete(request.id);
    return { count };
  }
}
