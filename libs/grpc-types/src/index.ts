import * as UserProto from './protos/user';
import * as CommonProto from './protos/commons';
import * as MerchantProto from './protos/merchant';
import * as BookingProto from './protos/booking';
import * as NotificationProto from './protos/notification';
import * as BranchProto from './protos/branch';
import * as DeviceProto from './protos/device';
import * as MerchantUserProto from './protos/merchant_user';

export * from './config';

export * from './servers';
export * from './clients';

export {
  CommonProto,
  UserProto,
  MerchantProto,
  BookingProto,
  NotificationProto,
  BranchProto,
  DeviceProto,
  MerchantUserProto,
};

export const GrpcMetadataErrorKey = 'custom-grpc-error';
