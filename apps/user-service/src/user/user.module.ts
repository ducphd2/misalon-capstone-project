import { EBullQueue } from '@libs/core';
import { BranchUserModel, UserModel } from '@libs/database/entities';
import { BranchUserRepository, UserRepository } from '@libs/database/repositories';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { MerchantClient } from '@libs/grpc-types';
import { ClientsModule } from '@nestjs/microservices';

import { DeviceModule } from '../device/device.module';

import { UserController } from './user.controller';
import { UserProcessor } from './user.processor';
import { UserService } from './user.service';

@Module({
  imports: [
    SecretsModule,
    SequelizeModule.forFeature([UserModel, BranchUserModel]),
    DeviceModule,
    BullModule.registerQueue({
      name: EBullQueue.USER_QUEUE,
    }),
    ClientsModule.register([MerchantClient]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, UserProcessor, BranchUserRepository],
  exports: [UserService],
})
export class UserModule {}
