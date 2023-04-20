import { NotificationEntity } from '@libs/database/entities';
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
          ...secrets.notificationServiceDatabase,
          autoLoadEntities: true,
          synchronize: true,
          migrations: ['dist/src/db/migrations/*{.ts,.js}'],
          charset: 'utf8mb4',
          // logging: true,
          namingStrategy: new SnakeNamingStrategy(),
          entities: [NotificationEntity],
        } as PostgresConnectionOptions;
      },
      inject: [AbstractSecretsService],
    }),
  ],
})
export class NotificationDatabaseModule {}
