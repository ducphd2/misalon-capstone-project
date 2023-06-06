import { EBullQueue } from '@libs/core';
import { BookingModel, BookingRepository, PaymentModel, PaymentRepository } from '@libs/database';
import { BullQueueProvider, SecretsModule, SecretsService } from '@libs/modules';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    SecretsModule,
    SequelizeModule.forFeature([PaymentModel, BookingModel]),
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
  controllers: [PaymentController],
  providers: [PaymentService, PaymentRepository, BullQueueProvider, SecretsService, BookingRepository],
})
export class PaymentModule {}
