import { EBullEvent } from '@libs/core';
import { NotificationRepository } from '@libs/database';
import { CommonProto, NotificationProto } from '@libs/grpc-types';
import { ENotificationType } from '@libs/grpc-types/protos/commons';
import { BullQueueProvider, MessageComponent } from '@libs/modules';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';

import { ELangType } from '@/api-gateway/dtos';

@Injectable()
export class NotificationService {
  constructor(
    private readonly bullQueueProvider: BullQueueProvider,
    private readonly notificationRepository: NotificationRepository,
    private readonly i18n: MessageComponent,
  ) {}

  async create(request: NotificationProto.CreateNotificationInput) {
    const notification = await this.notificationRepository.create(request);
    return notification;
  }

  async createBookingNotification(request: NotificationProto.CreateNotificationInput) {
    const titleEn = this.i18n.lang('lang.NOTIFICATION.CREATE.BOOKING.SUCCESS', {
      lang: ELangType.EN,
    });

    const titleVi = this.i18n.lang('lang.NOTIFICATION.CREATE.BOOKING.SUCCESS', {
      lang: ELangType.VI,
    });

    const notification = await this.create({
      type: ENotificationType.BOOKING,
      titleEn,
      titleVi,
      userId: request?.userId,
    });

    await this.bullQueueProvider.addNotificationEvent(EBullEvent.NOTIFICATION_SEND_EMAIL_BOOKING_EVENT, {
      ...notification,
      ...request,
    });
    return notification;
  }

  async find(request: CommonProto.QueryRequest) {
    const merchants = await this.notificationRepository.find(JSON.parse(request.where));
    return merchants;
  }

  async findWithPaging(request: CommonProto.QueryRequest) {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.notificationRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result;
  }

  async findById(id: number) {
    const merchant = await this.notificationRepository.findById(id);
    return merchant;
  }

  async findOne(dto: CommonProto.QueryRequest) {
    const where = !isEmpty(dto.where) ? JSON.parse(dto.where) : undefined;

    const result = await this.notificationRepository.findOne({
      ...dto,
      where,
      raw: true,
    });

    return result;
  }
}
