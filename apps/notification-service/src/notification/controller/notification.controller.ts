import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';
import { CommonProto, NotificationProto } from '@libs/grpc-types';
import { GrpcLogInterceptor } from 'interceptors/interceptors';
import { Observable } from 'rxjs';
import { NotificationService } from '@/notification-service/notification/service/booking.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller('notification')
@NotificationProto.BookingServiceGrpcControllerMethods()
export class NotificationController implements NotificationProto.BookingServiceGrpcController {
  constructor(private readonly notificationService: NotificationService) {}
  findAll(
    request: CommonProto.QueryRequest,
  ):
    | NotificationProto.FindAllBookingsPagination
    | Promise<NotificationProto.FindAllBookingsPagination>
    | Observable<NotificationProto.FindAllBookingsPagination> {
    throw new Error('Method not implemented.');
  }
}
