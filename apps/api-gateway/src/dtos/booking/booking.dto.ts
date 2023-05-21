import { CommonProto } from '@libs/grpc-types';
import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateBookingInput {
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @IsNotEmpty()
  serviceIds: number[];

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  branchId?: number;

  @IsOptional()
  @IsEnum(CommonProto.EBookingStatus)
  status?: CommonProto.EBookingStatus = CommonProto.EBookingStatus.BOOKING_PENDING;

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
  note?: string;

  @IsOptional()
  @IsInt()
  merchantId?: number;

  @IsOptional()
  @IsInt()
  duration?: number;
}

export class PartialUpdateBooking extends PartialType<CreateBookingInput>(CreateBookingInput) {}
