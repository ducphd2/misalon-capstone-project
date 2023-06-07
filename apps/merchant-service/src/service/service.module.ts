import {
  BookingServiceModel,
  BookingServiceRepository,
  MerchantModel,
  MerchantRepository,
  ServiceModel,
  ServiceRepository,
} from '@libs/database';
import { SecretsModule } from '@libs/modules';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ServicesService } from '../service/service.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([ServiceModel, MerchantModel, BookingServiceModel])],
  providers: [ServicesService, ServiceRepository, MerchantRepository, BookingServiceRepository],
  exports: [ServicesService],
})
export class ServicesModule {}
