import { EBullQueue } from '@libs/core';
import { BullQueueProvider, SecretsModule } from '@libs/modules';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

import { MessagesModule } from '../messages/messages.module';

import { EventsGateway } from './events.gateway';

import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';
import { AdminGateway } from '@/api-gateway/modules/events/admin.gateway';

@Module({
  imports: [
    MessagesModule,
    UserCommonModule,
    SecretsModule,
    BullModule.registerQueue({
      name: EBullQueue.NOTIFICATION_QUEUE,
    }),
    BullModule.registerQueue({
      name: EBullQueue.GATEWAY_QUEUE,
    }),
    BullModule.registerQueue({
      name: EBullQueue.BOOKING_QUEUE,
    }),
    BullModule.registerQueue({
      name: EBullQueue.USER_QUEUE,
    }),
  ],
  providers: [EventsGateway, AdminGateway, BullQueueProvider],
  exports: [EventsGateway, AdminGateway],
})
export class EventsModule {}
