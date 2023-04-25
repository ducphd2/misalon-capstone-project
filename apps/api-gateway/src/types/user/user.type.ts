import { Field, Float, HideField, InputType, Int, ObjectType, PartialType } from '@nestjs/graphql';

import { BaseType, ErrorPayload, PageMeta } from './../base';

import { CreateUserInputDto } from '@/api-gateway/dtos';
import { ECustomerLevel, EUserGender, EUserRole, EUserStatus } from '@/api-gateway/dtos/common';
import { Merchant } from '@/api-gateway/types/merchant';
import { DevicePaging } from '@/api-gateway/types/user/device.type';

@ObjectType()
export class User extends BaseType {
  @Field(() => String, { nullable: true })
  email?: string;

  @HideField()
  password?: string;

  @Field({ nullable: true })
  fullName?: string;

  @Field(() => EUserStatus, { nullable: true })
  status?: EUserStatus;

  @Field(() => EUserRole)
  role?: EUserRole;

  @Field(() => EUserGender, { nullable: true })
  gender?: EUserGender;

  @Field(() => ECustomerLevel, { nullable: true })
  level?: ECustomerLevel;

  @Field({ nullable: true })
  contact?: string;

  @Field({ nullable: true })
  dobDay?: number;

  @Field({ nullable: true })
  dobMonth?: number;

  @Field({ nullable: true })
  dobYear?: number;

  @Field(() => String, { nullable: true })
  occupation?: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  cityCode?: number;

  @Field({ nullable: true })
  districtCode?: number;

  @Field({ nullable: true })
  wardCode?: number;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => String, { nullable: true })
  referrer?: string;

  @Field(() => String, { nullable: true })
  referrerCode?: string;

  @Field(() => String, { nullable: true })
  customerCode?: string;

  @Field(() => String, { nullable: true })
  facebook?: string;

  @Field(() => String, { nullable: true })
  zaloPhone?: string;

  @Field(() => Float, { nullable: true })
  height?: number;

  @Field(() => Float, { nullable: true })
  weight?: number;

  @Field(() => String, { nullable: true })
  memberCardNo?: string;

  @Field(() => String, { nullable: true })
  company?: string;

  @Field(() => String, { nullable: true })
  taxNo?: string;

  @Field(() => String, { nullable: true })
  note?: string;

  @Field(() => String, { nullable: true })
  relatedUser?: string;

  @Field(() => String, { nullable: true })
  relatedUserRole?: string;

  @Field(() => String, { nullable: true })
  relatedUserPhone?: string;

  @Field(() => Int, { nullable: true })
  branchId?: number;

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => [Merchant], { nullable: true })
  merchants?: Merchant[];

  @Field(() => DevicePaging, { nullable: true })
  devices?: DevicePaging;
}

@InputType()
export class UpdatePartialUser extends PartialType<CreateUserInputDto>(CreateUserInputDto) {}

@ObjectType()
export class UserPayload {
  @Field(() => [ErrorPayload], { nullable: true })
  errors?: ErrorPayload[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@ObjectType()
export class UserPaging {
  @Field(() => [User], { nullable: true })
  items?: User[];

  @Field(() => PageMeta, { nullable: true })
  meta?: PageMeta;
}
