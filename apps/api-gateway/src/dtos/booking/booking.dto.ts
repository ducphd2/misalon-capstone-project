import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

import { EBookingStatus } from '@/api-gateway/dtos/common';

export class CreateBookingInput {
  @IsNotEmpty()
  @IsInt()
  serviceId: number;

  @IsOptional()
  @IsEnum(EBookingStatus)
  status?: EBookingStatus = EBookingStatus.BOOKING_PENDING;

  @IsNotEmpty()
  @IsString()
  startTime?: string;

  @IsNotEmpty()
  @IsString()
  bookingDate?: string;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsString()
  serviceName?: string;

  @IsOptional()
  @IsString()
  userEmail?: string;

  @IsOptional()
  @IsString()
  userPhoneNumber?: string;

  @IsOptional()
  @IsString()
  note?: string;

  @IsOptional()
  @IsInt()
  merchantId?: number;

  @IsOptional()
  @IsInt()
  branchId?: number;

  @IsOptional()
  @IsInt()
  duration?: number;
}

export class PartialUpdateBooking extends PartialType<CreateBookingInput>(CreateBookingInput) {}
