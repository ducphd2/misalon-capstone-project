import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { MerchantController } from './merchant.controller';

import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';
import { BookingCommonModule } from '@/api-gateway/modules/booking-common/booking-common.module';

@Module({
  imports: [MerchantCommonModule, BookingCommonModule, UtilsModule],
  controllers: [MerchantController],
  providers: [],
})
export class MerchantModule {}
