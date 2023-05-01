import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { MessagesModule } from '../messages/messages.module';

@Module({
  imports:[
    MessagesModule
  ],
  providers: [EventsGateway],
})
export class EventsModule {}