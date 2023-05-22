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
  constructor(private readonly paymentService: PaymentService) {}

  async findAll(request: QueryRequest): Promise<PaymentProto.Payments> {
    const items = await this.paymentService.find(request);
    return { items };
  }

  async find(request: QueryRequest): Promise<PaymentProto.PaymentPagination> {
    return await this.paymentService.findWithPaging(request);
  }

  async findById(request: Id): Promise<PaymentProto.NullablePayment> {
    return await this.paymentService.findById(request.id);
  }

  async findOne(request: QueryRequest): Promise<PaymentProto.NullablePayment> {
    const payment = await this.paymentService.findOne(request);
    return { payment };
  }

  async count(request: QueryRequest): Promise<Count> {
    const count = await this.paymentService.count(request);
    return { count };
  }

  async create(request: PaymentProto.CreatePaymentInput): Promise<PaymentProto.Payment> {
    const result = await this.paymentService.create(request);

    return result;
  }

  async callback(request: PaymentProto.CallbackQuery): Promise<PaymentProto.Payment> {
    try {
      const result = await this.paymentService.handleCallbackVnPay(JSON.parse(request.query), JSON.parse(request.body));

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async update(request: PaymentProto.UpdatePaymentInput): Promise<PaymentProto.Payment> {
    return await this.paymentService.update(request);
  }

  async delete(request: Id): Promise<Count> {
    const count = await this.paymentService.delete(request.id);
    return { count };
  }
}
