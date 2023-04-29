import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';

import { ServicesService } from './service.service';

import { JwtAuthGuard } from '@/api-gateway/core';
import { BaseQueryDto, CreateServiceInput, PartialUpdateService } from '@/api-gateway/dtos';
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
