import { registerEnumType } from '@nestjs/graphql';

export enum EBookingStatus {
  PENDING = 0,
  APPROVE = 1,
  CANCELLED = 2,
}

registerEnumType(EBookingStatus, {
  name: 'EBookingStatus',
});
