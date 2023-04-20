import { UserDatabaseModule } from '@libs/database/connection/user';
import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';

@Module({
  imports: [UserDatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
