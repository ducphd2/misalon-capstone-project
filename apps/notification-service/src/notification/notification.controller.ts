import { NotificationProto } from '@libs/grpc-types';
import { GrpcLogInterceptor } from '@libs/interceptors';
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';
import { MessageComponent } from '@libs/modules';

import { NotificationService } from './notification.service';

import { ELangType, ENotificationType } from '@/api-gateway/dtos';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller()
@NotificationProto.NotificationServiceControllerMethods()
export class NotificationController implements NotificationProto.NotificationServiceController {
  constructor(private readonly notificationService: NotificationService, private readonly i18n: MessageComponent) {}

  async createBookingNotification(
    request: NotificationProto.CreateNotificationInput,
  ): Promise<NotificationProto.Notification> {
    const notification = await this.notificationService.create({
      bodyEn: this.i18n.lang('lang.NOTIFICATION.CREATE.BOOKING.SUCCESS', {
        lang: ELangType.EN,
      }),
      bodyVi: this.i18n.lang('lang.NOTIFICATION.CREATE.BOOKING.SUCCESS', {
        lang: ELangType.VI,
      }),
      type: ENotificationType.BOOKING,
      titleEn: this.i18n.lang('lang.NOTIFICATION.CREATE.BOOKING.SUCCESS', {
        lang: ELangType.EN,
      }),
      titleVi: this.i18n.lang('lang.NOTIFICATION.CREATE.BOOKING.SUCCESS', {
        lang: ELangType.VI,
      }),
    });
    return notification;
  }

  async create(request: NotificationProto.CreateNotificationInput): Promise<NotificationProto.Notification> {
    const notification = await this.notificationService.create(request);
    return notification;
  }
}
