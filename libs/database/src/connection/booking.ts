import { operatorsAliases } from '@libs/core';
import { BookingModel } from '@libs/database/entities/booking';
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
          ...secrets.bookingServiceDatabase,
          logging: false,
          typeValidation: true,
          operatorsAliases: operatorsAliases,
          models: [BookingModel],
          autoLoadModels: true,
          synchronize: true,
          // sync: {
          //   force: true,
          // },
          query: {
            raw: true,
          },
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
export class BookingDatabaseModule {}
