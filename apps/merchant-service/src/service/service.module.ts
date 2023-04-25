import { ServiceModel } from '@libs/database/entities';
import { ServiceRepository } from '@libs/database/repositories';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';

import { ServicesService } from '../service/service.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([ServiceModel])],
  providers: [ServicesService, ServiceRepository],
  exports: [ServicesService],
})
export class ServicesModule {}
