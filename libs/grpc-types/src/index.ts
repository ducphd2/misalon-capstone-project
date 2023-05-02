import * as UserProto from './protos/user';
import * as CommonProto from './protos/commons';
import * as MerchantProto from './protos/merchant';
import * as BookingProto from './protos/booking';
import * as BranchProto from './protos/branch';
import * as DeviceProto from './protos/device';
import * as MerchantUserProto from './protos/merchant_user';
import * as NotificationProto from './protos/notification';

export * from './config';

export * from './servers';
export * from './clients';

export {
  CommonProto,
  UserProto,
  MerchantProto,
  BookingProto,
  BranchProto,
  DeviceProto,
  MerchantUserProto,
  NotificationProto,
};

export const GrpcMetadataErrorKey = 'custom-grpc-error';
