import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

import { MessageComponent } from '@/api-gateway/core';
import { BookingCommonModule } from '@/api-gateway/modules/booking-common/booking-common.module';

@Module({
  imports: [BookingCommonModule, UtilsModule],
  providers: [BookingService, MessageComponent],
  controllers: [BookingController],
})
export class BookingModule {}
