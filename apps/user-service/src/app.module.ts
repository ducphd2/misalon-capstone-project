import { UserDatabaseModule } from '@libs/database/connection/user';
import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [UserDatabaseModule, UserModule, DeviceModule],
})
export class AppModule {}
