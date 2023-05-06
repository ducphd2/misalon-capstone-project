import { resolve } from 'path';

import { config } from 'dotenv';
config();

export const UserConfig = {
  hostname: 'user-service',
  host: process.env.USER_SERVICE_HOST,
  port: +process.env.USER_SERVICE_PORT,
  path: resolve('libs/grpc-types/src/protos', 'user.proto'),
  loader: {
    keepCase: true,
    longs: Number,
    enums: Number,
    arrays: true,
  },
};

export const MerchantConfig = {
  hostname: 'merchant-service',
  host: process.env.MERCHANT_SERVICE_HOST,
  port: +process.env.MERCHANT_SERVICE_PORT,
  path: resolve('libs/grpc-types/src/protos', 'merchant.proto'),
  loader: {
    keepCase: true,
    longs: Number,
    enums: Number,
    arrays: true,
  },
};

export const BookingConfig = {
  hostname: 'booking-service',
  host: process.env.BOOKING_SERVICE_HOST,
  port: +process.env.BOOKING_SERVICE_PORT,
  path: resolve('libs/grpc-types/src/protos', 'booking.proto'),
  loader: {
    keepCase: true,
    longs: Number,
    enums: Number,
    arrays: true,
  },
};

export const NotificationConfig = {
  hostname: 'notification-service',
  host: process.env.NOTIFICATION_SERVICE_HOST,
  port: +process.env.NOTIFICATION_SERVICE_PORT,
  path: resolve('libs/grpc-types/src/protos', 'notification.proto'),
  loader: {
    keepCase: true,
    longs: Number,
    enums: Number,
    arrays: true,
  },
};

export const PaymentConfig = {
  hostname: 'payment-service',
  host: process.env.PAYMENT_SERVICE_HOST,
  port: +process.env.PAYMENT_SERVICE_PORT,
  path: resolve('libs/grpc-types/src/protos', 'payment.proto'),
  loader: {
    keepCase: true,
    longs: Number,
    enums: Number,
    arrays: true,
  },
};
