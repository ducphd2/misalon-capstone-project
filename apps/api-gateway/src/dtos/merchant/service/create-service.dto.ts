import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { EServiceShowType, EServiceType } from '@/api-gateway/dtos/common';

export class CreateServiceInput {
  @IsNotEmpty()
  @IsInt()
  groupId?: number;

  sku?: string;

  code?: string;

  @IsNotEmpty()
  @IsString()
  name?: string;

  description?: string;

  image?: string;

  @IsNotEmpty()
  price?: number;

  initialPrice?: number;

  durationHour?: number;

  durationMinute?: number;

  type?: EServiceType;

  showType?: EServiceShowType;

  canPrintableInvoice?: boolean;

  @IsOptional()
  @IsInt()
  merchantId?: number;
}

export class PartialUpdateService extends PartialType(CreateServiceInput) {}
