import { BookingModel, BookingRepository } from '@libs/database';
import { NotificationClient, UserClient } from '@libs/grpc-types';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { BullModule } from '@nestjs/bull';
import { EBullQueue } from '@libs/core';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { BookingProcessor } from './booking.processor';

@Module({
  imports: [
    SecretsModule,
    SequelizeModule.forFeature([BookingModel]),
    ClientsModule.register([NotificationClient, UserClient]),
    BullModule.registerQueue({
      name: EBullQueue.BOOKING_QUEUE,
    }),
  ],
  controllers: [BookingController],
  providers: [BookingService, BookingRepository, BookingProcessor],
})
export class BookingModule {}
