import { DeviceEntity } from '@libs/database/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { DeviceRepository } from '@libs/database/repositories';

import { DeviceService } from './device.service';

@Module({
  imports: [SecretsModule, TypeOrmModule.forFeature([DeviceEntity])],
  providers: [DeviceService, DeviceRepository],
  exports: [DeviceService],
})
export class DeviceModule {}
