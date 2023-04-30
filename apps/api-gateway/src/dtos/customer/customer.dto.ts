import { PartialType } from '@nestjs/mapped-types';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

import { ECustomerLevel, EUserGender, EUserRole, EUserStatus } from '@/api-gateway/dtos/common';

export class AddCustomerDto {
  @IsInt()
  @IsNotEmpty()
  merchantId?: number;

  @Transform(({ value }: TransformFnParams) => value?.trim().toLowerCase())
  @IsEmail()
  @IsOptional()
  email: string;

  @MaxLength(30)
  @MinLength(5)
  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEnum(EUserRole)
  @IsNotEmpty()
  role: EUserRole;

  @IsOptional()
  @IsEnum(EUserStatus)
  status: EUserStatus;

  @IsEnum(EUserGender)
  @IsOptional()
  gender: EUserGender;

  @IsOptional()
  level?: ECustomerLevel;

  @IsOptional()
  contact: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsOptional()
  dobDay: number;

  @IsOptional()
  dobMonth: number;

  @IsOptional()
  dobYear: number;

  @IsOptional()
  occupation?: string;

  @IsOptional()
  avatar?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  cityCode?: number;

  @IsOptional()
  districtCode?: number;

  @IsOptional()
  wardCode?: number;

  @IsOptional()
  referrer?: string;

  @IsOptional()
  referrerCode?: string;

  @IsOptional()
  customerCode?: string;

  @IsOptional()
  facebook?: string;

  @IsOptional()
  zaloPhone?: string;

  @IsOptional()
  height?: number;

  @IsOptional()
  weight?: number;

  @IsOptional()
  memberCardNo?: string;

  @IsOptional()
  company?: string;

  @IsOptional()
  taxNo?: string;

  @IsOptional()
  note?: string;

  @IsOptional()
  relatedUser?: string;

  @IsOptional()
  relatedUserRole?: string;

  @IsOptional()
  relatedUserPhone?: string;

  @IsOptional()
  branchId?: number;
}

export class UpdatePartialCustomer extends PartialType<AddCustomerDto>(AddCustomerDto) {}
