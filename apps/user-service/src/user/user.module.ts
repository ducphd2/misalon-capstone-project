import { Module } from '@nestjs/common';
import { SecretsModule } from 'libs/modules/global/secrets/module';

import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Module({
  imports: [SecretsModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
