import { EActionRole, ECustomerLevel, EUserGender, EUserRole, EUserStatus } from '@libs/database/enums';
import { FindUsersPayload } from '@libs/grpc-types/protos/user';
import { Field, HideField, InputType, Int, ObjectType, PartialType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty } from 'class-validator';

import { BaseType, PageInfo } from './../base';

@ObjectType()
export class User extends BaseType {
  @Field()
  email?: string;

  @HideField()
  password?: string;

  @Field({ nullable: true })
  readonly fullName?: string;

  @Field(() => EUserStatus, { nullable: true })
  readonly status?: EUserStatus;

  @Field(() => EUserRole)
  readonly role?: EUserRole;

  @Field(() => EUserGender, { nullable: true, defaultValue: EUserGender.FEMALE })
  readonly gender?: EUserGender;

  @Field({ nullable: true })
  readonly contact?: string;

  @Field({ nullable: true })
  readonly dobDay?: number;

  @Field({ nullable: true })
  readonly dobMonth?: number;

  @Field({ nullable: true })
  readonly dobYear?: number;

  @Field(() => String, { nullable: true })
  readonly occupation?: string;

  @Field(() => String, { nullable: true })
  readonly avatar?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  cityCode?: number;

  @Field({ nullable: true })
  districtCode?: number;

  // @Field(() => [MerchantConnection], { nullable: true })
  // merchants: MerchantConnection;

  // @Field(() => [Device], { nullable: true })
  // devices: Device[];
}

@InputType()
export class CreateUserInputDto {
  @Field()
  readonly email: string;

  @Field()
  readonly password: string;

  @Field()
  readonly fullName: string;

  @Field(() => EUserRole)
  @IsEnum(EUserRole)
  @IsNotEmpty()
  readonly role: EUserRole;

  @Field(() => EUserRole)
  @IsEnum(EUserRole)
  @IsNotEmpty()
  readonly actionRole: EActionRole;

  @Field(() => EUserStatus)
  @IsEnum(EUserStatus)
  @IsNotEmpty()
  readonly status: EUserStatus;

  @Field(() => EUserGender)
  @IsEnum(EUserGender)
  @IsNotEmpty()
  readonly gender: EUserGender;

  @Field(() => String, { nullable: true })
  readonly contact: string;

  @Field(() => Int, { nullable: true })
  readonly dobDay: number;

  @Field(() => Int, { nullable: true })
  readonly dobMonth: number;

  @Field(() => Int, { nullable: true })
  readonly dobYear: number;

  @Field(() => String, { nullable: true })
  readonly occupation?: string;

  @Field(() => String, { nullable: true })
  readonly avatar?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => Int, { nullable: true })
  cityCode?: number;

  @Field(() => Int, { nullable: true })
  districtCode?: number;

  @Field(() => String, { nullable: true })
  wardCode?: number;

  @Field(() => String, { nullable: true })
  level?: ECustomerLevel;

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

  @Field(() => String, { nullable: true })
  height?: number;

  @Field(() => String, { nullable: true })
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

  @Field(() => String, { nullable: true })
  branchId?: number;
}

// @ObjectType()
// export class UserPayload {
//   @Field(() => [ErrorPayload], { nullable: true })
//   errors?: IErrorPayload[];

//   @Field(() => User, { nullable: true })
//   user?: IUser;
// }

@ObjectType()
export class UserEdge {
  @Field(() => User)
  node: User;

  @Field(() => String)
  cursor: string;
}

@ObjectType()
export class UsersConnection implements FindUsersPayload {
  @Field(() => [UserEdge])
  edges: UserEdge[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@InputType()
export class UpdatePartialUser extends PartialType<CreateUserInputDto>(CreateUserInputDto) {}

@InputType()
export class UpdatePasswordInput {
  @Field()
  readonly currentPassword?: string;

  @Field()
  readonly newPassword?: string;

  @Field()
  readonly confirmPassword?: string;
}

// @ObjectType()
// export class DeleteUserPayload {
//   @Field(() => [ErrorPayload], { nullable: true })
//   errors?: ErrorPayload[];

//   @Field(() => Int, { nullable: true })
//   count?: number;
// }

@ObjectType()
export class UserIncludeCustomer extends BaseType {
  @Field()
  email: string;

  @HideField()
  password: string;

  @Field()
  readonly fullName: string;

  @Field(() => EUserStatus)
  readonly status: EUserStatus;

  @Field(() => EUserRole)
  readonly role: EUserRole;

  @Field(() => EUserGender, { nullable: false, defaultValue: EUserGender.FEMALE })
  readonly gender: EUserGender;

  @Field()
  readonly contact: string;

  @Field({ nullable: true })
  readonly dobDay?: number;

  @Field({ nullable: true })
  readonly dobMonth?: number;

  @Field({ nullable: true })
  readonly dobYear?: number;

  @Field(() => String, { nullable: true })
  readonly occupation?: string;

  @Field(() => String, { nullable: true })
  readonly avatar?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  cityCode?: number;

  @Field({ nullable: true })
  districtCode?: number;
}

@ObjectType()
export class UserPaginationResponse {
  @Field(() => [User])
  items: User[];

  @Field(() => Int)
  page: number;

  @Field(() => Int)
  totalPage: number;

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  limit: number;
}
