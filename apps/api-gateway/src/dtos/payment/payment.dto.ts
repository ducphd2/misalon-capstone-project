import { EPaymentType } from '@libs/core';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive } from 'class-validator';

import { CreateProductBookingInput } from '../product';
import { CreateOperatorBookingInput } from '../operator';

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

  @IsOptional()
  @Type(() => CreateProductBookingInput)
  products: CreateProductBookingInput[];

  @IsOptional()
  @Type(() => CreateOperatorBookingInput)
  operators: CreateOperatorBookingInput[];
}

export class PartialUpdatePayment extends PartialType<CreatePaymentInput>(CreatePaymentInput) {}
