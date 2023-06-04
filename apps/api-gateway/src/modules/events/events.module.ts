import { Module } from '@nestjs/common';
import { SecretsModule, SecretsService } from '@libs/modules';

import { MessagesModule } from '../messages/messages.module';

import { EventsGateway } from './events.gateway';

import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';
import { FirebaseModule } from '@/notification-service/firebase/firebase.module';
import { FirebaseService } from '@/notification-service/firebase/firebase.service';

@Module({
  imports: [MessagesModule, FirebaseModule, UserCommonModule, SecretsModule],
  providers: [EventsGateway, FirebaseService, SecretsService],
})
export class EventsModule {}
