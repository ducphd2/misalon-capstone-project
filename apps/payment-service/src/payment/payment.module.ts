import { PaymentModel, PaymentRepository } from '@libs/database';
import { NotificationClient } from '@libs/grpc-types';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';

import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([PaymentModel]), ClientsModule.register([NotificationClient])],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentRepository],
})
export class PaymentModule {}
