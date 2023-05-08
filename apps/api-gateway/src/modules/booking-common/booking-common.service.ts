import {
  BOOKING_PACKAGE_NAME,
  BOOKING_SERVICE_NAME,
  BookingServiceClient,
  CreateBookingInput,
  UpdateBookingData,
} from '@libs/grpc-types/protos/booking';
import { Id, QueryRequest } from '@libs/grpc-types/protos/commons';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { isEmpty, merge } from 'lodash';
import { firstValueFrom } from 'rxjs';

import { BaseQueryDto } from '@/api-gateway/dtos';

@Injectable()
export class BookingCommonService implements OnModuleInit {
  private bookingService: BookingServiceClient;

  constructor(@Inject(BOOKING_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.bookingService = this.client.getService<BookingServiceClient>(BOOKING_SERVICE_NAME);
  }

  async create(data: CreateBookingInput) {
    return await firstValueFrom(this.bookingService.create(data));
  }

  async findById(id: Id) {
    return await firstValueFrom(this.bookingService.findById(id));
  }

  async findAll(query: QueryRequest) {
    return await firstValueFrom(this.bookingService.findAll(query));
  }

  async findAndPaginate(query: QueryRequest) {
    return await firstValueFrom(this.bookingService.find(query));
  }

  async update(id: number, data: UpdateBookingData) {
    return await firstValueFrom(this.bookingService.update({ id, data }));
  }

  async delete(id: number) {
    return await firstValueFrom(this.bookingService.delete({ id }));
  }

  async findBookings(query?: BaseQueryDto, merchantId?: number) {
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

    const result = await this.findAndPaginate({
      ...query,
      where: where ? JSON.stringify(where) : null,
    });

    return result;
  }
}
