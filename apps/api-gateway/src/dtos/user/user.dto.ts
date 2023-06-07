import { CommonProto } from '@libs/grpc-types';
import { EUserRole } from '@libs/grpc-types/protos/commons';
import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

import { BaseQueryDto } from '../base/base.dto';

import { Match } from '@/api-gateway/core';

export class ChangePasswordInput {
  @IsString()
  @IsNotEmpty()
  currentPassword: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @Match('newPassword')
  @IsString()
  @IsNotEmpty()
  confirmPassword: string;
}

export class AddOperatorDto {
  @Transform(({ value }: TransformFnParams) => value?.trim().toLowerCase())
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MaxLength(30)
  @MinLength(5)
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEnum(CommonProto.EUserRole)
  @IsNotEmpty()
  role: CommonProto.EUserRole;

  @IsNotEmpty()
  @IsInt()
  merchantId?: number;

  @IsNotEmpty()
  @IsInt()
  branchId?: number;

  @IsOptional()
  @IsEnum(CommonProto.EUserStatus)
  status: CommonProto.EUserStatus;

  @IsEnum(CommonProto.EUserGender)
  @IsOptional()
  gender: CommonProto.EUserGender;

  @IsOptional()
  @IsEnum(CommonProto.ECustomerLevel)
  level?: CommonProto.ECustomerLevel;

  @IsOptional()
  contact: string;

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
}

export class PaginateUserDto extends BaseQueryDto {
  @IsBoolean()
  @IsOptional()
  excludeMe: boolean;
}

export class GetBranchUserDto extends BaseQueryDto {
  @Transform(({ value }) => +value)
  @IsNumber()
  @IsOptional()
  branchId: number;
}

export class GetMerchantUserDto extends GetBranchUserDto {
  @Transform(({ value }) => +value)
  @IsEnum(EUserRole)
  @IsOptional()
  role: EUserRole;
}

export class MerchantAddOperatorDto {
  @Transform(({ value }: TransformFnParams) => value?.trim().toLowerCase())
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MaxLength(30)
  @MinLength(5)
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEnum(CommonProto.EUserRole)
  @IsNotEmpty()
  role: CommonProto.EUserRole;

  @IsNotEmpty()
  @IsInt()
  branchId?: number;

  @IsOptional()
  @IsEnum(CommonProto.EUserStatus)
  status: CommonProto.EUserStatus;

  @IsEnum(CommonProto.EUserGender)
  @IsOptional()
  gender: CommonProto.EUserGender;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsOptional()
  occupation?: string;

  @IsOptional()
  avatar?: string;

  @IsOptional()
  address?: string;
}
