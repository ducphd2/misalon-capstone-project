import { BookingModel, BookingRepository } from '@libs/database';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([BookingModel])],
  controllers: [BookingController],
  providers: [BookingService, BookingRepository],
})
export class BookingModule {}
