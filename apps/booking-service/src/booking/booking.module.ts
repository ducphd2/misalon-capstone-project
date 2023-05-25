import { BookingModel, BookingRepository, BookingServiceModel, BookingServiceRepository } from '@libs/database';
import { NotificationClient, UserClient } from '@libs/grpc-types';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { BullModule } from '@nestjs/bull';
import { EBullQueue } from '@libs/core';
import { BullQueueModule, BullQueueProvider } from '@libs/modules';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { BookingProcessor } from './booking.processor';

@Module({
  imports: [
    SecretsModule,
    SequelizeModule.forFeature([BookingModel, BookingServiceModel]),
    ClientsModule.register([NotificationClient, UserClient]),
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
  controllers: [BookingController],
  providers: [BookingService, BookingRepository, BookingServiceRepository, BookingProcessor, BullQueueProvider],
})
export class BookingModule {}
