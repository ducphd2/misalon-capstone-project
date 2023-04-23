import { Module } from '@nestjs/common';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@libs/database/entities';
import { UserRepository } from '@libs/database/repositories';

import { DeviceModule } from '../device/device.module';
import { MerchantUserModule } from '../merchant-user/merchant-user.module';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [SecretsModule, TypeOrmModule.forFeature([UserEntity]), DeviceModule, MerchantUserModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
