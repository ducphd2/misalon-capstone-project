import { EBullQueue } from '@libs/core';
import { PaymentModel, PaymentRepository } from '@libs/database';
import { NotificationClient } from '@libs/grpc-types';
import { BullQueueProvider, SecretsService, SecretsModule } from '@libs/modules';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';

import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    SecretsModule,
    SequelizeModule.forFeature([PaymentModel]),
    ClientsModule.register([NotificationClient]),
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
  providers: [PaymentService, PaymentRepository, BullQueueProvider, SecretsService],
})
export class PaymentModule {}
