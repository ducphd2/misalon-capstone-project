import { UserModel } from '@libs/database';
import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { BookingService } from './booking.service';

import { JwtAuthGuard, User } from '@/api-gateway/core';
import { CreateBookingInput, PartialUpdateBooking } from '@/api-gateway/types';

@Controller('bookings')
export class BookingController {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createBooking(@User() user: UserModel, @Body() bookingInput: CreateBookingInput) {
    const booking = await this.bookingService.create(user, bookingInput);

    return { booking };
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

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findDetail(@Param('id') id: number) {
    return await this.bookingService.findDetail(id);
  }
}
