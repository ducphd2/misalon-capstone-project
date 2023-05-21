import { EServiceType } from '@libs/grpc-types/protos/merchant_common';
import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class MerchantCreateServiceInput {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsString()
  @IsOptional()
  sku?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  initialPrice?: number;

  @IsNumber()
  @IsPositive()
  @IsInt()
  @IsOptional()
  durationHour?: number;

  @IsNumber()
  @IsPositive()
  @IsInt()
  @IsOptional()
  durationMinute?: number;

  @IsEnum(EServiceType)
  @IsNotEmpty()
  type?: EServiceType;
}

export class PartialMerchantUpdateService extends PartialType(MerchantCreateServiceInput) {}
