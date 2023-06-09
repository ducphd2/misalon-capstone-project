import { CommonProto } from '@libs/grpc-types';
import { EUserGender } from '@libs/grpc-types/protos/commons';
import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
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
  @IsString()
  fullName?: string;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsEnum(EUserGender, { message: 'male: 0, female: 1, other: 2' })
  gender?: EUserGender;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  address?: string;
}

export class PartialUpdateBooking extends PartialType<CreateBookingInput>(CreateBookingInput) {}
