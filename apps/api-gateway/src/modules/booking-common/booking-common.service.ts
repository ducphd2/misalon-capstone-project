import { BookingEntity } from '@libs/database/entities/booking';
import {
  BOOKING_PACKAGE_NAME,
  BOOKING_SERVICE_NAME,
  BookingServiceClient,
  CreateBookingInput,
  FindBookingOffsetPagination,
  NullableBooking,
  UpdateBookingData,
} from '@libs/grpc-types/protos/booking';
import { Count, Id, QueryRequest } from '@libs/grpc-types/protos/commons';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BookingCommonService implements OnModuleInit {
  private bookingService: BookingServiceClient;

  constructor(@Inject(BOOKING_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.bookingService = this.client.getService<BookingServiceClient>(BOOKING_SERVICE_NAME);
  }

  async create(data: CreateBookingInput): Promise<BookingEntity> {
    return await firstValueFrom(this.bookingService.create(data));
  }

  async findById(id: Id): Promise<NullableBooking> {
    return await firstValueFrom(this.bookingService.findById(id));
  }

  async find(query: QueryRequest): Promise<FindBookingOffsetPagination> {
    return await firstValueFrom(this.bookingService.find(query));
  }

  async update(id: number, data: UpdateBookingData): Promise<BookingEntity> {
    return await firstValueFrom(this.bookingService.update({ id, data }));
  }

  async delete(id: number): Promise<Count> {
    return await firstValueFrom(this.bookingService.delete({ id }));
  }
}
