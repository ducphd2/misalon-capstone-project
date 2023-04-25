import { Module } from '@nestjs/common';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity, UserModel } from '@libs/database/entities';
import { UserRepository } from '@libs/database/repositories';
import { SequelizeModule } from '@nestjs/sequelize';

import { DeviceModule } from '../device/device.module';
import { MerchantUserModule } from '../merchant-user/merchant-user.module';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([UserModel]), DeviceModule, MerchantUserModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
