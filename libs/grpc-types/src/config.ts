import { resolve } from 'path';

export const UserConfig = {
  hostname: 'user-service',
  localHostname: '0.0.0.0',
  port: 50006,
  path: resolve('libs/grpc-types/src/protos', 'user.proto'),
  loader: {
    keepCase: true,
    longs: Number,
    enums: String,
    arrays: true,
  },
};

export const MerchantConfig = {
  hostname: 'merchant-service',
  localHostname: '0.0.0.0',
  port: 50008,
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
  localHostname: '0.0.0.0',
  port: 50010,
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
  localHostname: '0.0.0.0',
  port: 50012,
  path: resolve('libs/grpc-types/src/protos', 'notification.proto'),
  loader: {
    keepCase: true,
    longs: Number,
    enums: Number,
    arrays: true,
  },
};
