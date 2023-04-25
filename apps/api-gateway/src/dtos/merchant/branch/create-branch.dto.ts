import { Field, Float, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateBranchInput {
  @Field(() => String, { nullable: false })
  name?: string;

  @Field(() => String, { nullable: false })
  phone?: string;

  @Field(() => String, { nullable: false })
  address?: string;

  @Field(() => Int, { nullable: false })
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

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;
}

@InputType()
export class PartialUpdateBranch extends PartialType<CreateBranchInput>(CreateBranchInput) {}
