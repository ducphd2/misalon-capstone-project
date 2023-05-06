import { operatorsAliases } from '@libs/core';
import { PaymentModel } from '@libs/database';
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
          ...secrets.paymentServiceDatabase,
          logging: false,
          typeValidation: true,
          operatorsAliases: operatorsAliases,
          models: [PaymentModel],
          autoLoadModels: true,
          synchronize: true,
          sync: {
            force: true,
          },
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
export class PaymentDatabaseModule {}
