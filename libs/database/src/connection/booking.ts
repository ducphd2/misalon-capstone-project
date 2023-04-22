import { BookingEntity, BookingUserEntity } from '@libs/database/entities/booking';
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
          ...secrets.bookingServiceDatabase,
          autoLoadEntities: true,
          synchronize: true,
          migrations: ['dist/src/db/migrations/*{.ts,.js}'],
          charset: 'utf8mb4',
          // logging: true,
          namingStrategy: new SnakeNamingStrategy(),
          entities: [BookingEntity, BookingUserEntity],
          extra: {
            extensions: ['postgis'],
          },
          cli: {
            migrationsDir: 'libs/database/src/migrations/booking',
          },
          migrationsRun: true,
        } as PostgresConnectionOptions;
      },
      inject: [AbstractSecretsService],
    }),
  ],
})
export class BookingDatabaseModule {}
