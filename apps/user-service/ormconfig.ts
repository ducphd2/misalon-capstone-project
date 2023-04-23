import { config } from 'dotenv';
config();

export = {
  type: 'postgres',
  host: process.env.USER_DB_HOST,
  port: +process.env.USER_DB_PORT,
  username: process.env.USER_DB_USERNAME,
  password: process.env.USER_DB_PASSWORD,
  database: process.env.USER_DB_DATABASE,
  migrations: ['apps/user-service/src/db/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'apps/user-service/src/db/migrations',
  },
};
