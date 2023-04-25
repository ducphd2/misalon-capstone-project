import { DeviceModel } from '@libs/database/entities';
import { DeviceRepository } from '@libs/database/repositories';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';

import { DeviceService } from './device.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([DeviceModel])],
  providers: [DeviceService, DeviceRepository],
  exports: [DeviceService],
})
export class DeviceModule {}
