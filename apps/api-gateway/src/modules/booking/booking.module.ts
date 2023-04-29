import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

import { MessageComponent } from '@/api-gateway/core';
import { BookingCommonModule } from '@/api-gateway/modules/booking-common/booking-common.module';
import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';
import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';

@Module({
  imports: [BookingCommonModule, UserCommonModule, MerchantCommonModule, UtilsModule],
  providers: [BookingService, MessageComponent],
  controllers: [BookingController],
})
export class BookingModule {}
