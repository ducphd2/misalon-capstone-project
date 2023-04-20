import { Transport } from '@nestjs/microservices';
import {
  BookingConfig,
  BookingProto,
  MerchantConfig,
  MerchantProto,
  NotificationConfig,
  NotificationProto,
  UserConfig,
  UserProto,
} from '@libs/grpc-types';

export const UserClient: any = {
  name: UserProto.USER_PACKAGE_NAME,
  transport: Transport.GRPC,
  options: {
    package: UserProto.USER_PACKAGE_NAME,
    protoPath: UserConfig.path,
    url: `${UserConfig.localHostname}:${UserConfig.port}`,
    loader: UserConfig.loader,
  },
};

export const MerchantClient: any = {
  name: MerchantProto.MERCHANT_PACKAGE_NAME,
  transport: Transport.GRPC,
  options: {
    package: MerchantProto.MERCHANT_PACKAGE_NAME,
    protoPath: MerchantConfig.path,
    url: `${MerchantConfig.localHostname}:${MerchantConfig.port}`,
    loader: MerchantConfig.loader,
  },
};

export const BookingClient: any = {
  name: BookingProto.BOOKING_PACKAGE_NAME,
  transport: Transport.GRPC,
  options: {
    package: BookingProto.BOOKING_PACKAGE_NAME,
    protoPath: BookingConfig.path,
    url: `${BookingConfig.localHostname}:${BookingConfig.port}`,
    loader: BookingConfig.loader,
  },
};

export const NotificationClient: any = {
  name: NotificationProto.NOTIFICATION_PACKAGE_NAME,
  transport: Transport.GRPC,
  options: {
    package: NotificationProto.NOTIFICATION_PACKAGE_NAME,
    protoPath: NotificationConfig.path,
    url: `${NotificationConfig.localHostname}:${NotificationConfig.port}`,
    loader: NotificationConfig.loader,
  },
};
