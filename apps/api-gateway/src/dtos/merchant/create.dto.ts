import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateMerchantInputDto {
  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsNotEmpty()
  address: string;

  @Field(() => String)
  @IsNotEmpty()
  phone: string;

  @Field(() => String)
  @IsNotEmpty()
  subdomain: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  cityCode: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  districtCode: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  wardCode: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  city: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  district: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  ward: string;
}
