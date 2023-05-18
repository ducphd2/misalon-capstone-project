import { ECustomerLevel, EUserGender, EUserRole, EUserStatus } from '@libs/grpc-types/protos/commons';
import { PartialType } from '@nestjs/mapped-types';
import { Transform, TransformFnParams, Type } from 'class-transformer';
import { IsDefined, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

import { CreateMerchantInputDto } from '@/api-gateway/dtos/merchant';
import { DeviceInputDto } from '@/api-gateway/dtos/user';

export class CreateUserInputDto {
  @Transform(({ value }: TransformFnParams) => value?.trim().toLowerCase())
  @IsEmail()
  email: string;

  @MaxLength(30)
  @MinLength(5)
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsString()
  fullName: string;

  @IsEnum(EUserRole)
  @IsOptional()
  role: EUserRole;

  @IsOptional()
  @IsEnum(EUserStatus)
  status: EUserStatus;

  @IsEnum(EUserGender)
  @IsOptional()
  gender: EUserGender;

  @IsEnum(ECustomerLevel)
  @IsOptional()
  level?: ECustomerLevel;

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

  @IsOptional()
  branchId?: number;
}

export class RegisterPayload {
  @IsNotEmpty()
  @IsDefined()
  @Type(() => CreateUserInputDto)
  user: CreateUserInputDto;

  @IsOptional()
  @IsDefined()
  @Type(() => CreateMerchantInputDto)
  merchant: CreateMerchantInputDto;

  @IsOptional()
  @IsDefined()
  @Type(() => DeviceInputDto)
  device: DeviceInputDto;
}

export class UpdatePartialUser extends PartialType<CreateUserInputDto>(CreateUserInputDto) {}
