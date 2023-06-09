import { EBullQueue } from '@libs/core';
import { BookingModel, BranchUserModel, MerchantModel, ServiceModel, UserModel } from '@libs/database/entities';
import {
  BookingRepository,
  BranchUserRepository,
  MerchantRepository,
  ServiceRepository,
  UserRepository,
} from '@libs/database/repositories';
import { MerchantClient } from '@libs/grpc-types';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';

import { DeviceModule } from '../device/device.module';

import { UserController } from './user.controller';
import { UserProcessor } from './user.processor';
import { UserService } from './user.service';

@Module({
  imports: [
    SecretsModule,
    SequelizeModule.forFeature([UserModel, BranchUserModel, BookingModel, ServiceModel, MerchantModel]),
    DeviceModule,
    BullModule.registerQueue({
      name: EBullQueue.USER_QUEUE,
    }),
    ClientsModule.register([MerchantClient]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    UserProcessor,
    BranchUserRepository,
    BookingRepository,
    ServiceRepository,
    MerchantRepository,
  ],
  exports: [UserService],
})
export class UserModule {}
