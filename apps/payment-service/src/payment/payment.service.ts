import { PaymentRepository } from '@libs/database';
import { BookingProto, CommonProto, NotificationProto } from '@libs/grpc-types';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { isEmpty } from 'lodash';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PaymentService implements OnModuleInit {
  private notificationService: NotificationProto.NotificationServiceClient;

  constructor(
    private readonly paymentRepository: PaymentRepository,
    @Inject(NotificationProto.NOTIFICATION_PACKAGE_NAME) private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.notificationService = this.client.getService<NotificationProto.NotificationServiceClient>(
      NotificationProto.NOTIFICATION_SERVICE_NAME,
    );
  }

  async create(dto: BookingProto.CreateBookingInput) {
    const booking = await this.paymentRepository.create(dto);
    await firstValueFrom(this.notificationService.createBookingNotification({ ...booking, ...dto }));
    return booking;
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
    const booking = await this.paymentRepository.findById(id);
    return { booking };
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

  async update(request: BookingProto.UpdateBookingInput) {
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
}
