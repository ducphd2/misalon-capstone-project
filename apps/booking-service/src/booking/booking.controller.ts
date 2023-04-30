import { BookingProto } from '@libs/grpc-types';
import { Count, Id, QueryRequest } from '@libs/grpc-types/protos/commons';
import { GrpcLogInterceptor } from '@libs/interceptors';
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';
import { Observable } from 'rxjs';

import { BookingService } from './booking.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller()
@BookingProto.BookingServiceControllerMethods()
export class BookingController implements BookingProto.BookingServiceController {
  constructor(private readonly bookingService: BookingService) {}

  find(request: QueryRequest): Promise<BookingProto.FindBookingOffsetPagination> {
    throw new Error('Method not implemented.');
  }

  findById(request: Id): Promise<BookingProto.NullableBooking> {
    throw new Error('Method not implemented.');
  }

  findOne(request: QueryRequest): Promise<BookingProto.NullableBooking> {
    throw new Error('Method not implemented.');
  }

  count(request: QueryRequest): Count | Promise<Count> | Observable<Count> {
    throw new Error('Method not implemented.');
  }

  async create(request: BookingProto.CreateBookingInput): Promise<BookingProto.Booking> {
    const result = await this.bookingService.create(request);

    return result;
  }

  update(request: BookingProto.UpdateBookingInput): Promise<BookingProto.Booking> | Observable<BookingProto.Booking> {
    throw new Error('Method not implemented.');
  }

  delete(request: Id): Count | Promise<Count> | Observable<Count> {
    throw new Error('Method not implemented.');
  }
}
