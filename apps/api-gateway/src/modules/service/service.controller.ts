import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { UserModel } from '@libs/database';

import { ServicesService } from './service.service';

import { JwtAuthGuard, User } from '@/api-gateway/core';
import { CreateServiceInput, GetServiceDto, PartialUpdateService } from '@/api-gateway/dtos';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';

@Controller('services')
export class ServiceController {
  constructor(
    private readonly merchantService: MerchantCommonService,
    private readonly servicesService: ServicesService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createService(@Body() data: CreateServiceInput) {
    const result = await this.servicesService.create(data);
    return result;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateService(@Param('id') id: number, @Body() data: PartialUpdateService) {
    const result = await this.servicesService.update(id, data);
    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteService(@Param('id') id: number) {
    const result = await this.servicesService.delete(id);
    return result;
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Query() query?: GetServiceDto, @User() user?: UserModel) {
    const result = await this.merchantService.findServicesByCustomer(query, user);
    return result;
  }

  @Get(':id/feedbacks')
  @UseGuards(JwtAuthGuard)
  async findFeedback(@Param('id') id: number) {
    return await this.merchantService.findFeedback({ where: JSON.stringify({ serviceId: id }) });
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findDetail(@Param('id') id: number) {
    const result = await this.servicesService.delete(id);
    return result;
  }
}
