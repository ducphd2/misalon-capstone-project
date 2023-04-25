import { Field, Float, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { EServiceShowType, EServiceType } from '@/api-gateway/dtos/common';

@InputType()
export class CreateServiceInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int, { nullable: false })
  groupId?: number;

  @Field(() => String, { nullable: true })
  sku?: string;

  @Field(() => String, { nullable: true })
  code?: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String, { nullable: false })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Float, { nullable: false })
  @IsNotEmpty()
  price?: number;

  @Field(() => Float, { nullable: true })
  initialPrice?: number;

  @Field(() => Int, { nullable: true })
  durationHour?: number;

  @Field(() => Int, { nullable: true })
  durationMinute?: number;

  @Field(() => EServiceType, { nullable: true, defaultValue: EServiceType.SERVICE })
  type?: EServiceType;

  @Field(() => EServiceShowType, { nullable: true, defaultValue: EServiceShowType.BOTH })
  showType?: EServiceShowType;

  @Field(() => Boolean, { nullable: true })
  canPrintableInvoice?: boolean;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  merchantId?: number;
}

@InputType()
export class PartialUpdateService extends PartialType(CreateServiceInput) {}
