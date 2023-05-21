import { EBullQueue } from '@libs/core';
import { BullQueueModule, BullQueueProvider, MessageComponent } from '@libs/modules';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

import { MerchantQueryController } from './merchant-query.controller';
import { MerchantMutationController } from './merchant-mutation.controller';

import { BookingCommonModule } from '@/api-gateway/modules/booking-common/booking-common.module';
import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';
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
  controllers: [MerchantQueryController, MerchantMutationController],
  providers: [BullQueueProvider, MessageComponent],
})
export class MerchantModule {}
