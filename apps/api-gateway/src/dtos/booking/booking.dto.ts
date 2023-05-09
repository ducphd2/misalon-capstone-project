import { CommonProto } from '@libs/grpc-types';
import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookingInput {
  @IsNotEmpty()
  @IsInt()
  serviceId: number;

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
