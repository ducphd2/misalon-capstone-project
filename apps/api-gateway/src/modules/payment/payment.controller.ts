import { UserModel } from '@libs/database';
import { Body, Controller, Delete, Get, Ip, Logger, Param, Post, Query, UseGuards } from '@nestjs/common';

import { PaymentService } from './payment.service';

import { JwtAuthGuard, User } from '@/api-gateway/core';
import { CreatePaymentInput } from '@/api-gateway/dtos';

@Controller('payments')
export class PaymentController {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@User() user: UserModel, @Body() input: CreatePaymentInput, @Ip() ip: string) {
    const result = await this.paymentService.create(user, input, ip);

    return result;
  }

  @Get('callback')
  @UseGuards(JwtAuthGuard)
  async callback(@Query() query: any, @Body() data: any) {
    return await this.paymentService.callback(JSON.stringify(query), JSON.stringify(data));
  }

  // @Patch(':id')
  // @UseGuards(JwtAuthGuard)
  // async update(@Param('id') id: number, @Body() data: PartialUpdateBooking) {
  //   const result = await this.paymentService.update(id, data);

  //   return result;
  // }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number) {
    return await this.paymentService.delete(id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findDetail(@Param('id') id: number) {
    return await this.paymentService.findDetail(id);
  }
}
