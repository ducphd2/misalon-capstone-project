import { registerEnumType } from '@nestjs/graphql';

export enum EServiceType {
  SERVICE = 0,
  PRODUCT = 1,
}

registerEnumType(EServiceType, {
  name: 'EServiceType',
});

export enum EServiceShowType {
  BOTH = 0,
  CASHIER = 1,
  BOOKING = 2,
  NONE = 3,
}

registerEnumType(EServiceShowType, {
  name: 'EServiceShowType',
});
