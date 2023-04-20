import { BookingDatabaseModule } from '@libs/database/connection/booking';
import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [BookingDatabaseModule, BookingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
