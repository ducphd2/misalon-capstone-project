import { EPaymentType } from '@libs/core';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

import { CreateProductBookingInput } from '../product';
import { CreateOperatorBookingInput } from '../operator';

export class CreatePaymentInput {
  @IsNotEmpty()
  @IsInt()
  bookingId: number;

  @IsOptional()
  @IsInt()
  serviceId: number;

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
