import { DatabaseModule } from '@libs/database';
import { BullQueueModule } from '@libs/modules';
import { Module } from '@nestjs/common';

import { DeviceModule } from './device/device.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, UserModule, DeviceModule, BullQueueModule],
})
export class AppModule {}
