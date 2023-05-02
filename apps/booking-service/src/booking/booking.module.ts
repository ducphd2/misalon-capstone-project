import { BookingModel, BookingRepository } from '@libs/database';
import { NotificationClient } from '@libs/grpc-types';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([BookingModel]), ClientsModule.register([NotificationClient])],
  controllers: [BookingController],
  providers: [BookingService, BookingRepository],
})
export class BookingModule {}
