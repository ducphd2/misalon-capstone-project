import { DeviceEntity, MerchantUserEntity, UserEntity } from '@libs/database/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AbstractSecretsService } from 'libs/modules/global/secrets/adapter';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [SecretsModule],
      useFactory: (secrets: AbstractSecretsService): TypeOrmModuleOptions => {
        return {
          type: 'postgres',
          ...secrets.userServiceDatabase,
          autoLoadEntities: true,
          synchronize: true,
          migrations: ['dist/src/db/migrations/*{.ts,.js}'],
          charset: 'utf8mb4',
          // logging: true,
          namingStrategy: new SnakeNamingStrategy(),
          entities: [UserEntity, DeviceEntity, MerchantUserEntity],
          extra: {
            extensions: ['postgis'],
          },
          cli: {
            migrationsDir: 'libs/database/src/migrations/user',
          },
          migrationsRun: true,
        } as PostgresConnectionOptions;
      },
      inject: [AbstractSecretsService],
    }),
  ],
})
export class UserDatabaseModule {}
