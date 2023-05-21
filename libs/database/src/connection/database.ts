import { operatorsAliases } from '@libs/core';
import {
  BookingModel,
  BranchModel,
  DeviceModel,
  FeedbackModel,
  MerchantModel,
  NotificationModel,
  PaymentModel,
  ServiceModel,
  UserModel,
} from '@libs/database/entities';
import { BookingServiceModel } from '@libs/database/entities/booking/booking-service.model';
import { BranchUserModel } from '@libs/database/entities/user/branch-user.model';
import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { AbstractSecretsService } from 'libs/modules/global/secrets/adapter';
import { SecretsModule } from 'libs/modules/global/secrets/module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [SecretsModule],
      useFactory: async (secrets: AbstractSecretsService): Promise<SequelizeModuleOptions> => {
        return {
          dialect: 'postgres',
          ...secrets.userServiceDatabase,
          logging: false,
          typeValidation: true,
          operatorsAliases: operatorsAliases,
          models: [
            UserModel,
            DeviceModel,
            MerchantModel,
            BranchModel,
            BookingModel,
            ServiceModel,
            PaymentModel,
            FeedbackModel,
            NotificationModel,
            BranchUserModel,
            BookingServiceModel,
          ],
          autoLoadModels: true,
          synchronize: true,
          sync: {
            force: true,
          },
          // query: {
          //   raw: true,
          // },
          define: {
            timestamps: true,
            underscored: true,
            version: true,
          },
          dialectOptions: {
            charset: 'utf8',
          },
        };
      },
      inject: [AbstractSecretsService],
    }),
  ],
})
export class DatabaseModule {}
