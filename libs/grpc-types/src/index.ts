import * as BookingProto from './protos/booking';
import * as BranchProto from './protos/branch';
import * as CommonProto from './protos/commons';
import * as DeviceProto from './protos/device';
import * as FeedbackProto from './protos/feedback';
import * as MerchantProto from './protos/merchant';
import * as NotificationProto from './protos/notification';
import * as PaymentProto from './protos/payment';
import * as ServiceProto from './protos/service';
import * as UserProto from './protos/user';

export * from './config';

export * from './clients';
export * from './servers';

export {
  BookingProto,
  BranchProto,
  CommonProto,
  DeviceProto,
  FeedbackProto,
  MerchantProto,
  NotificationProto,
  PaymentProto,
  ServiceProto,
  UserProto,
};

export const GrpcMetadataErrorKey = 'custom-grpc-error';
