import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';
import { MessageComponent } from '@libs/modules';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

import { BookingCommonModule } from '@/api-gateway/modules/booking-common/booking-common.module';

@Module({
  imports: [BookingCommonModule, UtilsModule],
  providers: [BookingService, MessageComponent],
  controllers: [BookingController],
})
export class BookingModule {}
