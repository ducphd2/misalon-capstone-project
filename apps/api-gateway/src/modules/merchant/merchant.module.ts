import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { EBullQueue } from '@libs/core';
import { BullQueueModule, BullQueueProvider, MessageComponent } from '@libs/modules';

import { MerchantController } from './merchant.controller';

import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';
import { BookingCommonModule } from '@/api-gateway/modules/booking-common/booking-common.module';
import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';

@Module({
  imports: [
    MerchantCommonModule,
    BookingCommonModule,
    UserCommonModule,
    BullQueueModule,
    BullModule.registerQueue({
      name: EBullQueue.USER_QUEUE,
    }),
    BullModule.registerQueue({
      name: EBullQueue.NOTIFICATION_QUEUE,
    }),
    BullModule.registerQueue({
      name: EBullQueue.GATEWAY_QUEUE,
    }),
    BullModule.registerQueue({
      name: EBullQueue.BOOKING_QUEUE,
    }),
  ],
  controllers: [MerchantController],
  providers: [BullQueueProvider, MessageComponent],
})
export class MerchantModule {}
