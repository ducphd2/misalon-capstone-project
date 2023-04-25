import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { BaseType, ErrorPayload, PageInfo, PageMeta } from '@/api-gateway/types/base';

@ObjectType()
export class Branch extends BaseType {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => Int, { nullable: true })
  cityCode?: number;

  @Field(() => Int, { nullable: true })
  districtCode?: number;

  @Field(() => Int, { nullable: true })
  wardCode?: number;

  @Field(() => Int, { nullable: true })
  merchantId?: number;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  district?: string;

  @Field(() => String, { nullable: true })
  ward?: string;

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;
}

@ObjectType()
export class BranchEdge {
  @Field(() => Branch)
  node: Branch;

  @Field(() => String)
  cursor: string;
}

@ObjectType()
export class BranchConnection {
  @Field(() => [BranchEdge])
  edges: BranchEdge[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@ObjectType()
export class BranchPayload {
  @Field(() => [ErrorPayload], { nullable: true })
  errors?: ErrorPayload[];

  @Field(() => Branch, { nullable: true })
  branch?: Branch;
}

@ObjectType()
export class BranchesConnection {
  @Field(() => [Branch])
  branches: Branch[];
}

@ObjectType()
export class BranchPaging {
  @Field(() => [Branch], { nullable: true })
  items?: Branch[];

  @Field(() => PageMeta, { nullable: true })
  meta?: PageMeta;
}
