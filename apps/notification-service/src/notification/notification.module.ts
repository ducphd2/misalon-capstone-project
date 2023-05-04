import { NotificationModel, NotificationRepository } from '@libs/database';
import { BookingClient, MerchantClient, UserClient } from '@libs/grpc-types';
import { BullQueueModule, BullQueueProvider, LangModule, MessageComponent, SecretsModule } from '@libs/modules';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { BullModule } from '@nestjs/bull';
import { EBullQueue } from '@libs/core';

import { MailModule } from '../mailer/mailer.module';

import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { NotificationProcessor } from './notification.processor';

@Module({
  imports: [
    SecretsModule,
    SequelizeModule.forFeature([NotificationModel]),
    LangModule,
    MailModule,
    ClientsModule.register([UserClient]),
    ClientsModule.register([BookingClient]),
    ClientsModule.register([MerchantClient]),
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
  controllers: [NotificationController],
  providers: [NotificationService, NotificationRepository, MessageComponent, NotificationProcessor, BullQueueProvider],
})
export class NotificationModule {}
