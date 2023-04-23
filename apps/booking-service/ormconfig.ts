import { config } from 'dotenv';
config();

export = {
  type: 'postgres',
  host: process.env.BOOKING_DB_HOST,
  port: +process.env.BOOKING_DB_PORT,
  username: process.env.BOOKING_DB_USERNAME,
  password: process.env.BOOKING_DB_PASSWORD,
  database: process.env.BOOKING_DB_DATABASE,
  migrations: ['apps/booking-service/src/db/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'apps/booking-service/src/db/migrations',
  },
};
