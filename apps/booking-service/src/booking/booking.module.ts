import { EBullQueue } from '@libs/core';
import {
  BookingModel,
  BookingRepository,
  BookingServiceModel,
  BookingServiceRepository,
  BranchModel,
  BranchRepository,
  BranchUserModel,
  BranchUserRepository,
  MerchantModel,
  MerchantRepository,
  PaymentModel,
  PaymentRepository,
  UserModel,
  UserRepository,
} from '@libs/database';
import { BullQueueModule, BullQueueProvider } from '@libs/modules';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';

import { BookingController } from './booking.controller';
import { BookingProcessor } from './booking.processor';
import { BookingService } from './booking.service';

@Module({
  imports: [
    SecretsModule,
    SequelizeModule.forFeature([
      BookingModel,
      BookingServiceModel,
      BranchModel,
      BranchUserModel,
      PaymentModel,
      UserModel,
      BranchUserModel,
      MerchantModel,
    ]),
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
  providers: [
    BookingService,
    BookingRepository,
    BookingServiceRepository,
    BookingProcessor,
    BullQueueProvider,
    BranchRepository,
    BranchUserRepository,
    PaymentRepository,
    UserRepository,
    BranchUserRepository,
    MerchantRepository,
  ],
})
export class BookingModule {}
