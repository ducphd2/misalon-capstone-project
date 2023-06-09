import { ECustomerLevel, EUserGender, EUserRole, EUserStatus } from '@libs/grpc-types/protos/commons';
import { PartialType } from '@nestjs/mapped-types';
import { Transform, TransformFnParams, Type } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

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

  @IsEnum(EUserGender)
  @IsOptional()
  gender: EUserGender;

  @IsOptional()
  dobDay: number;

  @IsOptional()
  dobMonth: number;

  @IsOptional()
  dobYear: number;

  @IsOptional()
  job?: string;

  @IsOptional()
  avatar?: string;

  @IsString()
  @IsNotEmpty()
  merchantAddress?: string;

  @IsString()
  @IsNotEmpty()
  merchantName: string;

  @IsString()
  @IsNotEmpty()
  merchantPhoneNumber: string;

  @IsString()
  @IsNotEmpty()
  subdomain: string;

  @IsOptional()
  cityCode: number;

  @IsOptional()
  districtCode: number;

  @IsOptional()
  wardCode: number;
}

export class CustomerRegisterPayload {
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

export class VerifyRegisterMerchantOtpPayload {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @Transform(({ value }: TransformFnParams) => value?.trim().toLowerCase())
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MaxLength(6)
  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  otp: string;
}

export class ForgotPasswordMerchantRequest {
  @Transform(({ value }: TransformFnParams) => value?.trim().toLowerCase())
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  baseUrl: string;
}

export class ForgotPasswordMerchantVerify {
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsString()
  @IsNotEmpty()
  token: string;
}

export class ResetPasswordMerchantRequest extends ForgotPasswordMerchantVerify {
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
