import { Field, HideField, InputType, Int, ObjectType, PartialType } from '@nestjs/graphql';

import { BaseType, ErrorPayload, PageInfo } from './../base';

import { CreateUserInputDto } from '@/api-gateway/dtos';
import { EUserGender, EUserRole, EUserStatus } from '@/api-gateway/dtos/user/user.dto';
import { Merchant } from '@/api-gateway/types/merchant';

@ObjectType()
export class User extends BaseType {
  @Field()
  email?: string;

  @HideField()
  password?: string;

  @Field({ nullable: true })
  fullName?: string;

  @Field(() => EUserStatus, { nullable: true })
  status?: EUserStatus;

  @Field(() => EUserRole)
  role?: EUserRole;

  @Field(() => EUserGender, { nullable: true, defaultValue: EUserGender.FEMALE })
  gender?: EUserGender;

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

  @Field(() => [Merchant], { nullable: true })
  merchants?: Merchant[];

  // @Field(() => , { nullable: true })
  // devices?: Device[];
}

@ObjectType()
export class UserEdge {
  @Field(() => User)
  node: User;

  @Field(() => String)
  cursor: string;
}

@ObjectType()
export class UsersConnection {
  @Field(() => [UserEdge])
  edges: UserEdge[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@InputType()
export class UpdatePartialUser extends PartialType<CreateUserInputDto>(CreateUserInputDto) {}

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

@ObjectType()
export class UserPayload {
  @Field(() => [ErrorPayload], { nullable: true })
  errors?: ErrorPayload[];

  @Field(() => User, { nullable: true })
  user?: User;
}
