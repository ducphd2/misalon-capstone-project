import { MessageComponent } from '@libs/modules';
import { Injectable, Logger } from '@nestjs/common';
import * as moment from 'moment';
import { EPaymentType } from '@libs/grpc-types/protos/payment';

import { PaymentCommonService } from '../payment-common/payment-common.service';
import { MerchantCommonService } from '../merchant-common/merchant-common.service';

import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';

@Injectable()
export class StatisticsService {
  private readonly logger = new Logger(this.constructor.name);

  constructor(
    private readonly paymentService: PaymentCommonService,
    private readonly userService: UserCommonService,
    private readonly merchantService: MerchantCommonService,
    private readonly i18n: MessageComponent,
  ) {}

  async getOverviewStatistic(merchantId: number) {
    const statistic = await this.merchantService.overviewStatistic({
      where: JSON.stringify({
        merchantId,
      }),
    });

    return { statistic };
  }

  async getTotalRevenueInDay(merchantId: number, date?: string) {
    if (!date) date = moment().format('YYYY-MM-DD');

    const start = moment(date).startOf('day').toDate();
    const end = moment(start).endOf('day').toDate();

    const { items } = await this.paymentService.findAll({
      where: JSON.stringify({
        updatedAt: {
          _between: [start, end],
        },
        merchantId,
      }),
    });

    const statistic = items.reduce(
      (acc, curr) => {
        curr.type === EPaymentType.CASH ? (acc.totalCash += curr.totalPrice) : (acc.totalTransfer += curr.totalPrice);
        return acc;
      },
      {
        day: date,
        totalTransfer: 0,
        totalCash: 0,
      },
    );

    return { statistic };
  }

  async getTotalRevenueInYear(merchantId: number, year?: number) {
    if (!year) year = moment().year();

    const start = new Date(year, 0, 1); // Month is zero-indexed in JavaScript Date
    const end = new Date(year, 11, 31);

    const { items } = await this.paymentService.findAll({
      where: JSON.stringify({
        updatedAt: {
          _between: [start, end],
        },
        merchantId,
      }),
    });

    const statsByMonth = Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      total: 0,
    }));

    items.forEach((record) => {
      const month = moment(new Date(record.createdAt), 'YYYY-MM-DD').month();
      statsByMonth[month].total += record.totalPrice;
    });

    return { statistic: statsByMonth };
  }

  async getBookingStatisticByGender(merchantId: number) {
    return;
  }

  async getUserStatisticsByRange(merchantId: number) {
    const data = await this.userService.getUserStatisticsByRange({ merchantId });
    return data;
  }

  async getBookingStatisticByYear(merchantId: number, year?: number) {
    if (!year) year = moment().year();

    const start = new Date(year, 0, 1); // Month is zero-indexed in JavaScript Date
    const end = new Date(year, 11, 31);

    const { items } = await this.userService.getBookingStatisticByYear({
      where: JSON.stringify({
        updatedAt: {
          _between: [start, end],
        },
        merchantId,
      }),
    });

    const statsByMonth = Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      total: 0,
    }));

    items.forEach((booking) => {
      const updatedAt = new Date(booking?.updatedAt);
      const bookingYear = updatedAt?.getFullYear();
      const bookingMonth = updatedAt?.getMonth();

      if (bookingYear === year) {
        statsByMonth[bookingMonth].total += 1;
      }
    });

    return { statistic: statsByMonth };
  }
}
