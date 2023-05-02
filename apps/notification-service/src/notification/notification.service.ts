import { NotificationRepository } from '@libs/database';
import { CommonProto, NotificationProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';
import { MessageComponent } from '@libs/modules';

import { MailService } from '../mailer/mailer.service';

import { ELangType, ENotificationType } from '@/api-gateway/dtos';

@Injectable()
export class NotificationService {
  constructor(
    private readonly notificationRepository: NotificationRepository,
    private readonly mailService: MailService,
    private readonly i18n: MessageComponent,
  ) {}

  async create(request: NotificationProto.CreateNotificationInput) {
    const notification = await this.notificationRepository.create(request);
    return notification;
  }

  async createBookingNotification(request: NotificationProto.CreateNotificationInput) {
    const notification = await this.create({
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

  async sendCustomerMail() {
    //
  }
}
