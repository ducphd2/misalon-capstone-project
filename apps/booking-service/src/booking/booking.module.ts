import { Module } from '@nestjs/common';
import { BookingController } from './controller/booking.controller';
import { BookingService } from './service/booking.service';
import { SecretsModule } from 'libs/modules/global/secrets/module';

@Module({
  imports: [SecretsModule],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
