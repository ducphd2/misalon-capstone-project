import { Module } from '@nestjs/common';
import { BullQueueProvider, SecretsModule, SecretsService } from '@libs/modules';
import { BullModule } from '@nestjs/bull';
import { EBullQueue } from '@libs/core';

import { MessagesModule } from '../messages/messages.module';

import { EventsGateway } from './events.gateway';

import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';
import { FirebaseModule } from '@/notification-service/firebase/firebase.module';
import { FirebaseService } from '@/notification-service/firebase/firebase.service';

@Module({
  imports: [
    MessagesModule,
    FirebaseModule,
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
  providers: [EventsGateway, FirebaseService, SecretsService, BullQueueProvider],
})
export class EventsModule {}
