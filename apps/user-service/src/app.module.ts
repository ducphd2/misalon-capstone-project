import { UserDatabaseModule } from '@libs/database/connection/user';
import { Module } from '@nestjs/common';

import { DeviceModule } from './device/device.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserDatabaseModule, UserModule, DeviceModule],
})
export class AppModule {}
