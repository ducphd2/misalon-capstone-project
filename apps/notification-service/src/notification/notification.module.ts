import { EBullQueue } from '@libs/core';
import { NotificationModel, NotificationRepository } from '@libs/database';
import { BookingClient, MerchantClient, UserClient } from '@libs/grpc-types';
import { BullQueueProvider, LangModule, MessageComponent, SecretsModule } from '@libs/modules';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';

import { MailModule } from '../mailer/mailer.module';

import { NotificationController } from './notification.controller';
import { NotificationProcessor } from './notification.processor';
import { NotificationService } from './notification.service';

@Module({
  imports: [
    SecretsModule,
    SequelizeModule.forFeature([NotificationModel]),
    LangModule,
    MailModule,
    ClientsModule.register([UserClient, BookingClient, MerchantClient]),
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
  controllers: [NotificationController],
  providers: [NotificationService, NotificationRepository, MessageComponent, NotificationProcessor, BullQueueProvider],
})
export class NotificationModule {}
