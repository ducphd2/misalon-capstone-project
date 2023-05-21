import {
  BookingRepository,
  BookingServiceModel,
  BookingServiceRepository,
  ServiceModel,
  UserModel,
} from '@libs/database';
import { BookingProto, CommonProto, NotificationProto, UserProto } from '@libs/grpc-types';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { isEmpty } from 'lodash';
import { firstValueFrom, forkJoin, map, of, switchMap } from 'rxjs';

@Injectable()
export class BookingService implements OnModuleInit {
  private notificationService: NotificationProto.NotificationServiceClient;
  private userService: UserProto.UserServiceClient;

  constructor(
    private readonly bookingRepository: BookingRepository,
    private readonly bookingServiceRepository: BookingServiceRepository,
    @Inject(NotificationProto.NOTIFICATION_PACKAGE_NAME) private notificationClient: ClientGrpc,
    @Inject(UserProto.DUCPH_USER_PACKAGE_NAME) private userClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.notificationService = this.notificationClient.getService<NotificationProto.NotificationServiceClient>(
      NotificationProto.NOTIFICATION_SERVICE_NAME,
    );
    this.userService = this.userClient.getService<UserProto.UserServiceClient>(UserProto.USER_SERVICE_NAME);
  }

  async create(dto: BookingProto.CreateBookingInput) {
    const booking = await this.bookingRepository.create(dto);

    await Promise.all(
      dto.serviceIds.map((id) => this.bookingServiceRepository.create({ bookingId: booking.id, serviceId: id })),
    );

    await firstValueFrom(this.notificationService.createBookingNotification({ ...booking, ...dto }));

    return booking;
  }

  async find(request: CommonProto.QueryRequest) {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.bookingRepository.findAndPaginate(
      {
        ...request,
        where: baseWhereQuery,
      },
      {
        include: [ServiceModel, UserModel],
      },
    );

    return result;
  }

  async findAll(request: CommonProto.QueryRequest) {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.bookingRepository.find({
      ...request,
      where: baseWhereQuery,
      include: [ServiceModel],
    });

    return result;
  }

  async findWithPaging(request: CommonProto.QueryRequest) {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.bookingRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result;
  }

  async findById(id: number) {
    const booking = await this.bookingRepository.findById(id);
    return { booking };
  }

  async findOne(dto: CommonProto.QueryRequest) {
    const where = !isEmpty(dto.where) ? JSON.parse(dto.where) : undefined;

    const result = await this.bookingRepository.findOne({
      ...dto,
      where,
      raw: true,
    });

    return result;
  }

  async delete(id: number): Promise<number> {
    const count = await this.bookingRepository.delete({
      where: { id },
    });

    return count;
  }

  async update(request: BookingProto.UpdateBookingInput) {
    const result = await this.bookingRepository.update(request.data, {
      where: {
        id: request.id,
      },
    });
    return result[0];
  }

  async count(query: CommonProto.QueryRequest): Promise<number> {
    const result = await this.bookingRepository.count({
      where: query.where ? JSON.parse(query.where) : null,
    });

    return result;
  }
}
