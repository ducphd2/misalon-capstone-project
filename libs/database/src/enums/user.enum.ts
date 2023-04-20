import { registerEnumType } from '@nestjs/graphql';

export enum EUserRole {
  USER = 0,
  ADMIN = 1,
  SUPER_ADMIN = 2,
}

registerEnumType(EUserRole, {
  name: 'EUserRole',
});

export enum EActionRole {
  MANAGER = 0,
  RECEPTIONIST = 1,
  MASTER_WORKER = 2,
  ASSISTANT_WORKER = 3,
}

registerEnumType(EActionRole, {
  name: 'EActionRole',
});

export enum EUserGender {
  MALE = 0,
  FEMALE = 1,
  OTHER = 2,
}

registerEnumType(EUserGender, {
  name: 'EUserGender',
});

export enum EUserStatus {
  PENDING = 0,
  ACTIVE = 1,
  BANNED = 2,
}

registerEnumType(EUserStatus, {
  name: 'EUserStatus',
});

export enum ECustomerLevel {
  NORMAL = 0,
  SILVER = 1,
  GOLD = 2,
  PLATINUM = 3,
}

registerEnumType(ECustomerLevel, {
  name: 'ECustomerLevel',
});
