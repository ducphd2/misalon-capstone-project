import { UserModel } from '@libs/database';
import { Body, Controller, Delete, Get, Ip, Logger, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ErrorHelper } from '@libs/core';

import { PaymentService } from './payment.service';

import { JwtAuthGuard, User } from '@/api-gateway/core';
import { CallbackPaymentInput, CreatePaymentInput } from '@/api-gateway/dtos';

@Controller('payments')
export class PaymentController {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@User() user: UserModel, @Body() input: CreatePaymentInput, @Ip() ip: string) {
    try {
      const result = await this.paymentService.create(user, input, ip);

      return result;
    } catch (error) {
      ErrorHelper.HttpBadRequestException(error.message);
    }
  }

  @Get('callback')
  async callback(@Query() query: CallbackPaymentInput) {
    return await this.paymentService.callback(JSON.stringify(query));
  }

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
