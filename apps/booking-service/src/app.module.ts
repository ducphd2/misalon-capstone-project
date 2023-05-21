import { DatabaseModule } from '@libs/database';
import { BullQueueModule } from '@libs/modules';
import { Module } from '@nestjs/common';

import { BookingModule } from './booking/booking.module';

@Module({
  imports: [DatabaseModule, BookingModule, BullQueueModule],
})
export class AppModule {}
