import { Field, InputType, Int } from '@nestjs/graphql';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

import { ECustomerLevel, EUserGender, EUserRole, EUserStatus } from '@/api-gateway/dtos/common';

@InputType()
export class AddCustomerDto {
  @Field(() => String, { nullable: true })
  @Transform(({ value }: TransformFnParams) => value?.trim().toLowerCase())
  @IsEmail()
  @IsOptional()
  email: string;

  @Field(() => String, { nullable: true })
  @MaxLength(30)
  @MinLength(5)
  @IsString()
  @IsOptional()
  password: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @Field(() => EUserRole, { nullable: false, defaultValue: EUserRole.USER })
  @IsEnum(EUserRole)
  @IsNotEmpty()
  role: EUserRole;

  @Field(() => EUserStatus, { nullable: true })
  @IsOptional()
  @IsEnum(EUserStatus)
  status: EUserStatus;

  @Field(() => EUserGender, { nullable: true })
  @IsEnum(EUserGender)
  @IsOptional()
  gender: EUserGender;

  @Field(() => ECustomerLevel, { nullable: true })
  @IsOptional()
  level?: ECustomerLevel;

  @Field(() => String, { nullable: true })
  @IsOptional()
  contact: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  dobDay: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  dobMonth: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  dobYear: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  occupation?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  avatar?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  address?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  cityCode?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  districtCode?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  wardCode?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  referrer?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  referrerCode?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  customerCode?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  facebook?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  zaloPhone?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  height?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  weight?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  memberCardNo?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  company?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  taxNo?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  note?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  relatedUser?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  relatedUserRole?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  relatedUserPhone?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  branchId?: number;

  @Field(() => Int, { nullable: false })
  @IsOptional()
  merchantId?: number;
}
