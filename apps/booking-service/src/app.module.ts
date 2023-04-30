import { BookingDatabaseModule } from '@libs/database';
import { Module } from '@nestjs/common';

import { BookingModule } from './booking/booking.module';

@Module({
  imports: [BookingDatabaseModule, BookingModule],
})
export class AppModule {}
