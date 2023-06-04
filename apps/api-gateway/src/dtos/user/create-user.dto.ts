import { CommonProto } from '@libs/grpc-types';
import { OmitType, PartialType } from '@nestjs/mapped-types';
import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsString,
  IsEnum,
  IsInt,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateUserDto {
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

  @IsOptional()
  @IsInt()
  merchantId?: number;

  @IsOptional()
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
  @IsString()
  phoneNumber: string;

  @IsInt()
  @IsOptional()
  dobDay: number;

  @IsInt()
  @IsOptional()
  dobMonth: number;

  @IsInt()
  @IsOptional()
  dobYear: number;

  @IsString()
  @IsOptional()
  job?: string;

  @IsString()
  @IsOptional()
  avatar?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsInt()
  @IsOptional()
  cityCode?: number;

  @IsInt()
  @IsOptional()
  districtCode?: number;

  @IsInt()
  @IsOptional()
  wardCode?: number;

  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longitude?: number;
}

export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['password', 'email'])) {}
