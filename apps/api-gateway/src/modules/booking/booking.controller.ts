import { UserModel } from '@libs/database';
import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { isEmpty } from 'lodash';
import { ErrorHelper } from '@libs/core';

import { MerchantCommonService } from '../merchant-common/merchant-common.service';

import { BookingService } from './booking.service';

import { JwtAuthGuard, NormalUser, User } from '@/api-gateway/core';
import { CreateBookingInput, PartialUpdateBooking } from '@/api-gateway/dtos';

@Controller('bookings')
export class BookingController {
  private readonly logger = new Logger(this.constructor.name);

  constructor(
    private readonly bookingService: BookingService,
    private readonly merchantService: MerchantCommonService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createBooking(@User() user: UserModel, @Body() bookingInput: CreateBookingInput) {
    const { branch } = await this.merchantService.findBranchById({ id: bookingInput?.branchId });
    if (isEmpty(branch)) {
      ErrorHelper.HttpNotFoundException('Chi nhánh không tồn tại');
    }

    const { items } = await this.merchantService.findService({
      where: JSON.stringify({
        id: {
          _in: bookingInput.serviceIds,
        },
      }),
    });

    if (!items.length) {
      ErrorHelper.HttpNotFoundException('Dịch vụ không hợp lệ');
    }

    const result = await this.bookingService.create(user, {
      ...bookingInput,
      merchantId: bookingInput.merchantId ?? items[0]?.merchantId ?? null,
    });

    return result;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateBooking(@Param('id') id: number, @Body() data: PartialUpdateBooking) {
    const result = await this.bookingService.update(id, data);

    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteBooking(@Param('id') id: number) {
    return await this.bookingService.delete(id);
  }

  @Get(':id/feedbacks')
  @UseGuards(JwtAuthGuard)
  async findFeedback(@Param('id') id: number) {
    return await this.bookingService.findFeedback(id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @NormalUser()
  async findOwn(@User() user: UserModel) {
    return await this.bookingService.findOwn(user);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findDetail(@Param('id') id: number) {
    return await this.bookingService.findDetail(id);
  }
}
