import { ErrorHelper } from '@libs/core';
import { UserModel } from '@libs/database/entities';
import { EUserRole } from '@libs/grpc-types/protos/commons';
import { Injectable, Logger } from '@nestjs/common';
import { isEmpty, merge } from 'lodash';

import { MessageComponent } from '@/api-gateway/core';
import { BookingCommonService } from '@/api-gateway/modules/booking-common/booking-common.service';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import { CreateBookingInput, PartialUpdateBooking } from '@/api-gateway/types';

@Injectable()
export class BookingService {
  private readonly logger = new Logger(this.constructor.name);

  constructor(
    private readonly bookingService: BookingCommonService,
    private readonly userService: UserCommonService,
    private readonly merchantService: MerchantCommonService,
    private readonly i18n: MessageComponent,
  ) {}

  async create(user: UserModel, data: CreateBookingInput, lang?: string) {
    const { service } = await this.merchantService.findServiceById({
      id: data.serviceId,
    });

    if (isEmpty(service)) {
      this.logger.error(`Branch service is not found, ${JSON.stringify(data)}`);
      ErrorHelper.HttpNotFoundException(this.i18n.lang('lang.SERVICE.READ.NOT_EXIST', { lang }));
    }

    if (user.role === EUserRole.USER) {
      merge(data, {
        userId: user.id,
      });
    }

    const booking = await this.bookingService.create(data);

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

    const updatedBooking = await this.bookingService.update(id, data);

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

  async findDetail(id: number, lang?: string) {
    const { booking } = await this.bookingService.findById({ id });

    return {
      booking,
    };
  }
}
