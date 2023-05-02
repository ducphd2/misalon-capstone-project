import { NotificationProto } from '@libs/grpc-types';
import { GrpcLogInterceptor } from '@libs/interceptors';
import { MessageComponent } from '@libs/modules';
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';

import { NotificationService } from './notification.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller()
@NotificationProto.NotificationServiceControllerMethods()
export class NotificationController implements NotificationProto.NotificationServiceController {
  constructor(private readonly notificationService: NotificationService, private readonly i18n: MessageComponent) {}

  async createBookingNotification(
    request: NotificationProto.CreateNotificationInput,
  ): Promise<NotificationProto.Notification> {
    const notification = await this.notificationService.createBookingNotification(request);
    return notification;
  }

  async create(request: NotificationProto.CreateNotificationInput): Promise<NotificationProto.Notification> {
    const notification = await this.notificationService.create(request);
    return notification;
  }
}
