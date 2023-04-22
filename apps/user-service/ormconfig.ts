import { DeviceEntity, NotificationEntity, UserEntity } from '@libs/database/entities';
import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const userConnectionConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.USER_DB_HOST,
  port: +process.env.USER_DB_PORT,
  username: process.env.USER_DB_USERNAME,
  password: process.env.USER_DB_PASSWORD,
  database: process.env.USER_DB_DATABASE,
  synchronize: true,
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  migrations: ['dist/src/db/migrations/*{.ts,.js}'],
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [UserEntity, DeviceEntity, NotificationEntity],
};
