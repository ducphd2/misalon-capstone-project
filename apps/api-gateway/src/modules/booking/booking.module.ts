import { MessageComponent } from '@libs/modules';
import { Module } from '@nestjs/common';

import { MerchantCommonModule } from '../merchant-common/merchant-common.module';
import { BookingCommonModule } from '../booking-common/booking-common.module';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
  imports: [BookingCommonModule, MerchantCommonModule],
  providers: [BookingService, MessageComponent],
  controllers: [BookingController],
})
export class BookingModule {}
