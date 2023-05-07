import { Controller, Get, Logger, ParseIntPipe, Query, UseGuards } from '@nestjs/common';

import { StatisticsService } from './statistics.service';

import { JwtAuthGuard } from '@/api-gateway/core';

@Controller('statistics')
export class StatisticsController {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('revenue-date')
  @UseGuards(JwtAuthGuard)
  async getTotalRevenueInYear(@Query('date') date: string, @Query('merchantId', ParseIntPipe) merchantId: number) {
    return await this.statisticsService.getTotalRevenueInDay(merchantId, date);
  }

  @Get('revenue-year')
  @UseGuards(JwtAuthGuard)
  async getTotalRevenueInDay(@Query('year') year: number, @Query('merchantId', ParseIntPipe) merchantId: number) {
    return await this.statisticsService.getTotalRevenueInYear(merchantId, year);
  }
}
