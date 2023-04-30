import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateGroupInput {
  @IsNotEmpty()
  @IsInt()
  merchantId?: number;

  sku?: string;

  code?: string;

  @IsNotEmpty()
  @IsString()
  name?: string;

  description?: string;

  image?: string;
}

export class PartialUpdateGroup extends PartialType<CreateGroupInput>(CreateGroupInput) {}
