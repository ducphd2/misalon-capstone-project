import { BookingModel, BranchUserModel, MerchantModel, UserModel } from '@libs/database/entities';
import {
  BookingRepository,
  BranchUserRepository,
  MerchantRepository,
  UserRepository,
} from '@libs/database/repositories';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { ClientsModule } from '@nestjs/microservices';
import { BookingClient, UserClient } from '@libs/grpc-types';

import { BranchModule } from '../branch/branch.module';
import { ServicesModule } from '../service/service.module';
import { FeedbackModule } from '../feedback/feedback.module';

import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';

@Module({
  imports: [
    SecretsModule,
    SequelizeModule.forFeature([MerchantModel, BookingModel, UserModel, BranchUserModel]),
    BranchModule,
    ServicesModule,
    FeedbackModule,
    ClientsModule.register([BookingClient, UserClient]),
  ],
  controllers: [MerchantController],
  providers: [MerchantService, MerchantRepository, BookingRepository, UserRepository, BranchUserRepository],
})
export class MerchantModule {}
