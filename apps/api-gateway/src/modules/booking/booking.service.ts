import { ErrorHelper } from '@libs/core';
import { UserModel } from '@libs/database/entities';
import { EUserRole } from '@libs/grpc-types/protos/commons';
import { Injectable, Logger } from '@nestjs/common';
import { isEmpty, merge } from 'lodash';
import { MessageComponent } from '@libs/modules';

import { MerchantCommonService } from '../merchant-common/merchant-common.service';
import { BookingCommonService } from '../booking-common/booking-common.service';

import { CreateBookingInput, PartialUpdateBooking } from '@/api-gateway/dtos';
import { AdminGateway } from '@/api-gateway/modules/events/admin.gateway';

@Injectable()
export class BookingService {
  private readonly logger = new Logger(this.constructor.name);

  constructor(
    private readonly bookingService: BookingCommonService,
    private readonly i18n: MessageComponent,
    private readonly merchantService: MerchantCommonService,
    private readonly adminGateway: AdminGateway,
  ) {}

  async create(user: UserModel, data: CreateBookingInput, lang?: string) {
    if (user.role === EUserRole.USER) {
      merge(data, {
        userId: user.id,
      });
    }

    const booking = await this.bookingService.create(data);

    const { merchant } = await this.merchantService.findById({ id: booking.merchantId });

    await this.adminGateway.handleEmitCreateBooking({
      bookingId: booking.id,
      branchId: booking.branchId,
      userId: merchant.userId,
    });

    return {
      message: this.i18n.lang('lang.BOOKING.CREATE.SUCCESS', { lang }),
      booking,
    };
  }

  async update(id: number, data: PartialUpdateBooking, lang?: string) {
    const { booking } = await this.bookingService.findById({ id });

    if (isEmpty(booking)) {
      this.logger.error(`Booking is not found`);
      ErrorHelper.HttpNotFoundException(this.i18n.lang('lang.BOOKING.READ.NOT_EXIST', { lang }));
    }

    const updatedBooking = await this.bookingService.update(id, data as any);

    return {
      message: this.i18n.lang('lang.BOOKING.UPDATE.SUCCESS', { lang }),
      booking: updatedBooking,
    };
  }

  async delete(id: number, lang?: string) {
    const result = await this.bookingService.delete(id);

    return {
      message: this.i18n.lang('lang.BOOKING.DELETE.SUCCESS', { lang }),
      result,
    };
  }

  async findOwn(user: UserModel, lang?: string) {
    const result = await this.bookingService.findAndPaginate({
      where: JSON.stringify({
        userId: user.id,
      }),
    });

    return result;
  }

  async findDetail(id: number, lang?: string) {
    const { booking } = await this.bookingService.findById({ id });

    return {
      booking,
    };
  }

  async findFeedback(id: number, lang?: string) {
    const result = await this.merchantService.findFeedback({ where: JSON.stringify({ bookingId: id }) });

    return result;
  }
}
