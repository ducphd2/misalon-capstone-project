import { config } from 'dotenv';
config();

export = {
  type: 'postgres',
  host: process.env.MERCHANT_DB_HOST,
  port: +process.env.MERCHANT_DB_PORT,
  username: process.env.MERCHANT_DB_USERNAME,
  password: process.env.MERCHANT_DB_PASSWORD,
  database: process.env.MERCHANT_DB_DATABASE,
  migrations: ['apps/merchant-service/src/db/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'apps/merchant-service/src/db/migrations',
  },
};
