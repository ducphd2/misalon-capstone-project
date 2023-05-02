import { Module } from '@nestjs/common';

import { MessagesModule } from '../messages/messages.module';

import { EventsGateway } from './events.gateway';

import { JwtStrategy } from '@/api-gateway/core';

@Module({
  imports: [MessagesModule],
  providers: [EventsGateway, JwtStrategy],
})
export class EventsModule {}
