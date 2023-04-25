import { Field, InputType, Int, ObjectType, PartialType } from '@nestjs/graphql';
import { UpdateGroupData } from '@libs/grpc-types/protos/group';

import { BaseType, ErrorPayload, PageInfo, PageMeta } from '@/api-gateway/types/base';

@ObjectType()
export class Group extends BaseType {
  @Field(() => Int, { nullable: true })
  merchantId?: number;

  @Field(() => String, { nullable: true })
  sku?: string;

  @Field(() => String, { nullable: true })
  code?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  image?: string;
}

@ObjectType()
export class GroupEdge {
  @Field(() => Group)
  node: Group;

  @Field(() => String)
  cursor: string;
}

@ObjectType()
export class GroupConnection {
  @Field(() => [GroupEdge])
  edges: GroupEdge[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@ObjectType()
export class GroupPayload {
  @Field(() => [ErrorPayload], { nullable: true })
  errors?: ErrorPayload[];

  @Field(() => Group, { nullable: true })
  group?: Group;
}

@ObjectType()
export class GroupPaging {
  @Field(() => [Group], { nullable: true })
  items?: Group[];

  @Field(() => PageMeta, { nullable: true })
  meta?: PageMeta;
}
