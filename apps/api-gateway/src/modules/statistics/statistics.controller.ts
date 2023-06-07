import { Controller, Get, Logger, ParseIntPipe, Query, UseGuards } from '@nestjs/common';

import { StatisticsService } from './statistics.service';

import { JwtAuthGuard } from '@/api-gateway/core';

@Controller('statistics')
export class StatisticsController {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('overview')
  @UseGuards(JwtAuthGuard)
  async getOverviewStatistic(@Query('merchantId', ParseIntPipe) merchantId: number) {
    return await this.statisticsService.getOverviewStatistic(merchantId);
  }

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

  @Get('gender')
  @UseGuards(JwtAuthGuard)
  async getBookingStatisticByGender(@Query('merchantId', ParseIntPipe) merchantId: number) {
    return await this.statisticsService.getBookingStatisticByGender(merchantId);
  }

  @Get('age')
  @UseGuards(JwtAuthGuard)
  async getUserStatisticByRange(@Query('merchantId', ParseIntPipe) merchantId: number) {
    return await this.statisticsService.getUserStatisticsByRange(merchantId);
  }

  @Get('booking')
  @UseGuards(JwtAuthGuard)
  async getBookingStatisticByYear(@Query('merchantId', ParseIntPipe) merchantId: number, @Query('year') year: number) {
    return await this.statisticsService.getBookingStatisticByYear(merchantId, year);
  }
}
