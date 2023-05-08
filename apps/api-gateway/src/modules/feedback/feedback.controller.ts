import { UserModel } from '@libs/database';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';

import { MerchantCommonService } from '../merchant-common/merchant-common.service';

import { FeedbackService } from './feedback.service';

import { JwtAuthGuard, User } from '@/api-gateway/core';
import { BaseQueryDto, CreateInput, PartialUpdateService } from '@/api-gateway/dtos';

@Controller('feedbacks')
export class FeedbackController {
  constructor(
    private readonly merchantService: MerchantCommonService,
    private readonly servicesService: FeedbackService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() data: CreateInput, @User() user: UserModel) {
    const result = await this.servicesService.create(data, user);
    return result;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: number, @Body() data: PartialUpdateService) {
    const result = await this.servicesService.update(id, data);
    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number) {
    const result = await this.servicesService.delete(id);
    return result;
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Query() query?: BaseQueryDto) {
    const result = await this.merchantService.findAllServices(query);
    return result;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findDetail(@Param('id') id: number) {
    const result = await this.servicesService.delete(id);
    return result;
  }
}
