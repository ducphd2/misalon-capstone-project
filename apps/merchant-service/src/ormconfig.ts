import {
  BranchEntity,
  GroupEntity,
  ImageEntity,
  MerchantEntity,
  ServeImageEntity,
  ServiceEntity,
} from '@libs/database/entities';
import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const userConnectionConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.MERCHANT_DB_HOST,
  port: +process.env.MERCHANT_DB_PORT,
  username: process.env.MERCHANT_DB_USERNAME,
  password: process.env.MERCHANT_DB_PASSWORD,
  database: process.env.MERCHANT_DB_DATABASE,
  synchronize: true,
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  migrations: ['dist/src/db/migrations/*{.ts,.js}'],
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [MerchantEntity, BranchEntity, GroupEntity, ServiceEntity, ImageEntity, ServeImageEntity],
};
