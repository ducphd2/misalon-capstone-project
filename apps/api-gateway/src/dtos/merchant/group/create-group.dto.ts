import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateGroupInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int, { nullable: false })
  merchantId?: number;

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
}

@InputType()
export class PartialUpdateGroup extends PartialType<CreateGroupInput>(CreateGroupInput) {}
