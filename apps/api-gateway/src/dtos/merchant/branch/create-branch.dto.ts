import { Field } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBranchInput {
  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  phone?: string;

  @IsString()
  @IsNotEmpty()
  address?: string;

  @IsNumber()
  @IsNotEmpty()
  merchantId: number;

  @IsNumber()
  @IsOptional()
  cityCode?: number;

  @IsNumber()
  @IsOptional()
  districtCode?: number;

  @IsNumber()
  @IsOptional()
  wardCode?: number;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  district?: string;

  @IsString()
  @IsOptional()
  ward?: string;

  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longitude?: number;
}

export class PartialUpdateBranch extends PartialType<CreateBranchInput>(CreateBranchInput) {}
