import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { Match } from '@/api-gateway/core/decorators';

export enum ESortDirection {
  ASC = 0,
  DESC = 1,
}

export enum EServiceShowType {
  BOTH = 0,
  CASHIER = 1,
  BOOKING = 2,
  NONE = 3,
}

export enum EServiceType {
  SERVICE = 0,
  PRODUCT = 1,
}

export enum EServeImageType {
  MERCHANT = 0,
  BRANCH = 1,
  GROUP = 2,
  SERVICE = 3,
}

export enum EImageType {
  PHOTO = 0,
  VIDEO = 1,
}

export enum EDeviceOs {
  ANDROID = 0,
  IOS = 1,
}

export enum EUserGender {
  MALE = 0,
  FEMALE = 1,
  OTHER = 2,
}

export enum EActionRole {
  MANAGER = 0,
  RECEPTIONIST = 1,
  MASTER_WORKER = 2,
  ASSISTANT_WORKER = 3,
}

export enum EUserRole {
  USER = 0,
  ADMIN = 1,
  SUPER_ADMIN = 2,
}

export enum ECustomerLevel {
  NORMAL = 0,
  SILVER = 1,
  GOLD = 2,
  PLATINUM = 3,
}

export enum EUserStatus {
  PENDING = 0,
  ACTIVE = 1,
  BANNED = 2,
}

export enum EBookingStatus {
  PENDING = 0,
  APPROVE = 1,
  CANCELLED = 2,
  REJECT = 3,
}

registerEnumType(EDeviceOs, {
  name: 'EDeviceOs',
});

registerEnumType(EUserRole, {
  name: 'EUserRole',
});

registerEnumType(EActionRole, {
  name: 'EActionRole',
});

registerEnumType(EUserGender, {
  name: 'EUserGender',
});

registerEnumType(EUserStatus, {
  name: 'EUserStatus',
});

registerEnumType(ECustomerLevel, {
  name: 'ECustomerLevel',
});

registerEnumType(EBookingStatus, {
  name: 'EBookingStatus',
});

registerEnumType(ESortDirection, {
  name: 'ESortDirection',
});

registerEnumType(EServeImageType, {
  name: 'EServeImageType',
});

registerEnumType(EImageType, {
  name: 'EImageType',
});

registerEnumType(EServiceType, {
  name: 'EServiceType',
});

registerEnumType(EServiceShowType, {
  name: 'EServiceShowType',
});

@InputType()
export class UserInputDto {
  @Field(() => EDeviceOs)
  @IsEnum(EDeviceOs)
  @IsNotEmpty()
  os: EDeviceOs;

  @Field()
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  token: string;
}

@InputType()
export class ChangePasswordInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  currentPassword: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @Field()
  @Match('newPassword')
  @IsString()
  @IsNotEmpty()
  confirmPassword: string;
}
