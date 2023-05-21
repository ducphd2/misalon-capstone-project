import { EFeedbackType } from '@libs/grpc-types/protos/feedback';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateInput {
  @IsOptional()
  @IsInt()
  serviceId?: number;

  @IsOptional()
  @IsInt()
  rating?: number;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsInt()
  merchantId?: number;

  @IsOptional()
  @IsInt()
  branchId?: number;

  @IsOptional()
  @IsInt()
  bookingId?: number;

  @IsNotEmpty()
  @IsEnum(EFeedbackType)
  type?: EFeedbackType;
}
