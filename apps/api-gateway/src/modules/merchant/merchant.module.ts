import { Module } from '@nestjs/common';

import { MerchantController } from './merchant.controller';

import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';
import { BookingCommonModule } from '@/api-gateway/modules/booking-common/booking-common.module';

@Module({
  imports: [MerchantCommonModule, BookingCommonModule],
  controllers: [MerchantController],
  providers: [],
})
export class MerchantModule {}
