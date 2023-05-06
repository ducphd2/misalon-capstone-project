import {
  BookingConfig,
  MerchantConfig,
  NotificationConfig,
  PaymentConfig,
  PaymentProto,
  UserConfig,
  UserProto,
} from '@libs/grpc-types';
import { BOOKING_PACKAGE_NAME } from '@libs/grpc-types/protos/booking';
import { MERCHANT_PACKAGE_NAME } from '@libs/grpc-types/protos/merchant';
import { NOTIFICATION_PACKAGE_NAME } from '@libs/grpc-types/protos/notification';
import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const UserClient: ClientProviderOptions = {
  name: UserProto.DUCPH_USER_PACKAGE_NAME,
  transport: Transport.GRPC,
  options: {
    package: UserProto.DUCPH_USER_PACKAGE_NAME,
    protoPath: UserConfig.path,
    url: `${UserConfig.host}:${UserConfig.port}`,
    loader: UserConfig.loader,
  },
};

export const MerchantClient: ClientProviderOptions = {
  name: MERCHANT_PACKAGE_NAME,
  transport: Transport.GRPC,
  options: {
    package: MERCHANT_PACKAGE_NAME,
    protoPath: MerchantConfig.path,
    url: `${MerchantConfig.host}:${MerchantConfig.port}`,
    loader: MerchantConfig.loader,
  },
};

export const BookingClient: ClientProviderOptions = {
  name: BOOKING_PACKAGE_NAME,
  transport: Transport.GRPC,
  options: {
    package: BOOKING_PACKAGE_NAME,
    protoPath: BookingConfig.path,
    url: `${BookingConfig.host}:${BookingConfig.port}`,
    loader: BookingConfig.loader,
  },
};

export const NotificationClient: ClientProviderOptions = {
  name: NOTIFICATION_PACKAGE_NAME,
  transport: Transport.GRPC,
  options: {
    package: NOTIFICATION_PACKAGE_NAME,
    protoPath: NotificationConfig.path,
    url: `${NotificationConfig.host}:${NotificationConfig.port}`,
    loader: NotificationConfig.loader,
  },
};

export const PaymentClient: ClientProviderOptions = {
  name: PaymentProto.PAYMENT_PACKAGE_NAME,
  transport: Transport.GRPC,
  options: {
    package: PaymentProto.PAYMENT_PACKAGE_NAME,
    protoPath: PaymentConfig.path,
    url: `${PaymentConfig.host}:${PaymentConfig.port}`,
    loader: PaymentConfig.loader,
  },
};
