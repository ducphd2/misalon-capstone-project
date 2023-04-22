import { CreateInput } from '@libs/grpc-types/protos/merchant';
import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

import { Branch } from './branch.type';

import { BaseType, PageInfo, PageMeta } from '@/api-gateway/types/base';

@ObjectType()
export class Merchant extends BaseType {
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

  @Field(() => ID, { nullable: true })
  userId?: number;

  @Field(() => [Branch], { nullable: true })
  branches?: Branch[];
}

@ObjectType()
export class MerchantEdge {
  @Field(() => Merchant)
  node: Merchant;

  @Field(() => String)
  cursor: string;
}

@ObjectType()
export class MerchantConnection {
  @Field(() => [MerchantEdge])
  edges: MerchantEdge[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@InputType()
export class CreateMerchantInput implements CreateInput {
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

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  district?: string;

  @Field(() => String, { nullable: true })
  ward?: string;
}

@ObjectType()
export class MerchantsConnection {
  @Field(() => [Merchant], { nullable: true })
  merchants?: Merchant[];
}

@ObjectType()
export class MerchantPaging {
  @Field(() => [Merchant], { nullable: true })
  items?: Merchant[];

  @Field(() => PageMeta, { nullable: true })
  meta?: PageMeta;
}
