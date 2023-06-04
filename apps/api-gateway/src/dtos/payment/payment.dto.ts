import { EPaymentType } from '@libs/core';
import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreatePaymentInput {
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @IsNotEmpty()
  bookingIds: number[];

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsInt()
  merchantId?: number;

  @IsOptional()
  @IsInt()
  branchId?: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  totalPrice: number;

  @IsNotEmpty()
  @IsEnum(EPaymentType)
  type: EPaymentType;

  @IsString()
  @IsOptional()
  vnpayUrl: string;
}

export class PartialUpdatePayment extends PartialType<CreatePaymentInput>(CreatePaymentInput) {}
