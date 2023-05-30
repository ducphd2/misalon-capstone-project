import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBranchInput {
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

  @IsString()
  @IsOptional()
  openTime?: string;

  @IsString()
  @IsOptional()
  image?: string;
}

export class PartialUpdateBranch extends PartialType<CreateBranchInput>(CreateBranchInput) {}
