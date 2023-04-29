import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';
import { BookingProto, CommonProto } from '@libs/grpc-types';
import { GrpcLogInterceptor } from 'interceptors/interceptors';
import { Observable } from 'rxjs';

import { BookingService } from '../service/booking.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller('booking')
@BookingProto.BookingServiceGrpcControllerMethods()
export class BookingController implements BookingProto.BookingServiceGrpcController {
  constructor(private readonly bookingService: BookingService) {}
  find(
    request: CommonProto.Query,
  ):
    | BookingProto.FindBookingsPayload
    | Promise<BookingProto.FindBookingsPayload>
    | Observable<BookingProto.FindBookingsPayload> {
    throw new Error('Method not implemented.');
  }

  findAll(
    request: CommonProto.QueryRequest,
  ):
    | BookingProto.FindAllBookingsPagination
    | Promise<BookingProto.FindAllBookingsPagination>
    | Observable<BookingProto.FindAllBookingsPagination> {
    throw new Error('Method not implemented.');
  }

  findById(
    request: CommonProto.Id,
  ): BookingProto.Booking | Promise<BookingProto.Booking> | Observable<BookingProto.Booking> {
    throw new Error('Method not implemented.');
  }

  findOne(
    request: CommonProto.Query,
  ): BookingProto.Booking | Promise<BookingProto.Booking> | Observable<BookingProto.Booking> {
    throw new Error('Method not implemented.');
  }

  count(request: CommonProto.Query): CommonProto.Count | Promise<CommonProto.Count> | Observable<CommonProto.Count> {
    throw new Error('Method not implemented.');
  }

  create(
    request: BookingProto.CreateBookingInput,
  ): BookingProto.Booking | Promise<BookingProto.Booking> | Observable<BookingProto.Booking> {
    throw new Error('Method not implemented.');
  }

  customerCreate(
    request: BookingProto.CreateBookingInput,
  ): BookingProto.Booking | Promise<BookingProto.Booking> | Observable<BookingProto.Booking> {
    throw new Error('Method not implemented.');
  }

  update(
    request: BookingProto.UpdateBookingInput,
  ): BookingProto.Booking | Promise<BookingProto.Booking> | Observable<BookingProto.Booking> {
    throw new Error('Method not implemented.');
  }

  destroy(request: CommonProto.Query): CommonProto.Count | Promise<CommonProto.Count> | Observable<CommonProto.Count> {
    throw new Error('Method not implemented.');
  }
}
