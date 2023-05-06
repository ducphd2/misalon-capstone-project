import { ServiceModel, ServiceRepository } from '@libs/database';
import { SecretsModule } from '@libs/modules';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ServicesService } from '../service/service.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([ServiceModel])],
  providers: [ServicesService, ServiceRepository],
  exports: [ServicesService],
})
export class ServicesModule {}
