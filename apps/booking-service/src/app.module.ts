import { BookingDatabaseModule } from '@libs/database';
import { Module } from '@nestjs/common';
import { BullQueueModule } from '@libs/modules';

import { BookingModule } from './booking/booking.module';

@Module({
  imports: [BookingDatabaseModule, BookingModule, BullQueueModule],
})
export class AppModule {}
