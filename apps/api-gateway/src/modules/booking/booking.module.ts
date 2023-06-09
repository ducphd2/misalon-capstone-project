import { MessageComponent } from '@libs/modules';
import { Module } from '@nestjs/common';

import { BookingCommonModule } from '../booking-common/booking-common.module';
import { MerchantCommonModule } from '../merchant-common/merchant-common.module';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

import { EventsModule } from '@/api-gateway/modules/events/events.module';
import { AdminGateway } from '@/api-gateway/modules/events/admin.gateway';

@Module({
  imports: [BookingCommonModule, MerchantCommonModule, EventsModule],
  providers: [BookingService, MessageComponent, AdminGateway],
  controllers: [BookingController],
})
export class BookingModule {}
