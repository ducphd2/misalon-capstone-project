import { Field, InputType, Int, ObjectType, PartialType } from '@nestjs/graphql';
import { UpdateBranchData } from '@libs/grpc-types/protos/branch';

import { BaseType, ErrorPayload, PageInfo } from '@/api-gateway/types/base';

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

@InputType()
export class CreateBranchInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => Int, { nullable: true })
  merchantId: number;

  @Field(() => Int, { nullable: true })
  cityCode?: number;

  @Field(() => Int, { nullable: true })
  districtCode?: number;

  @Field(() => Int, { nullable: true })
  wardCode?: number;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  district?: string;

  @Field(() => String, { nullable: true })
  ward?: string;
}

@InputType()
export class PartialUpdateBranch
  extends PartialType<CreateBranchInput>(CreateBranchInput)
  implements UpdateBranchData {}
