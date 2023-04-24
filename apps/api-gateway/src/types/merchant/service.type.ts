import { Field, Float, InputType, Int, ObjectType, PartialType } from '@nestjs/graphql';

import { EServiceShowType, EServiceType } from '@/api-gateway/dtos/common';
import { BaseType, ErrorPayload, PageInfo } from '@/api-gateway/types/base';

@ObjectType()
export class Service extends BaseType {
  @Field(() => Int, { nullable: true })
  merchantId?: number;

  @Field(() => Int, { nullable: true })
  groupId?: number;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field(() => Float, { nullable: true })
  initialPrice?: number;

  @Field(() => Float, { nullable: true })
  capitalPrice?: number;

  @Field(() => Int, { nullable: true })
  durationHour?: number;

  @Field(() => Int, { nullable: true })
  durationMinute?: number;

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

  @Field(() => EServiceType, { nullable: true })
  type?: EServiceType;

  @Field(() => EServiceShowType, { nullable: true })
  showType?: EServiceShowType;

  @Field(() => Int, { nullable: true })
  canPrintableInvoice?: number;
}

@ObjectType()
export class ServiceEdge {
  @Field(() => Service)
  node: Service;

  @Field(() => String)
  cursor: string;
}

@ObjectType()
export class ServiceConnection {
  @Field(() => [ServiceEdge])
  edges: ServiceEdge[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@ObjectType()
export class ServicePayload {
  @Field(() => [ErrorPayload], { nullable: true })
  errors?: ErrorPayload[];

  @Field(() => Service, { nullable: true })
  service?: Service;
}

@InputType()
export class CreateServiceInput {
  @Field(() => Int, { nullable: true })
  merchantId?: number;

  @Field(() => Int, { nullable: true })
  groupId?: number;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field(() => Float, { nullable: true })
  initialPrice?: number;

  @Field(() => Float, { nullable: true })
  capitalPrice?: number;

  @Field(() => Int, { nullable: true })
  durationHour?: number;

  @Field(() => Int, { nullable: true })
  durationMinute?: number;

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

  @Field(() => EServiceType, { nullable: true })
  type?: EServiceType;

  @Field(() => EServiceShowType, { nullable: true })
  showType?: EServiceShowType;

  @Field(() => Int, { nullable: true })
  canPrintableInvoice?: number;
}

@InputType()
export class PartialUpdateService extends PartialType<CreateServiceInput>(CreateServiceInput) {}

@ObjectType()
export class ServiceOffsetPagination {
  @Field(() => [Service], { nullable: true })
  items: Service[];

  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  totalPage?: number;

  @Field(() => Int, { nullable: true })
  total?: number;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
