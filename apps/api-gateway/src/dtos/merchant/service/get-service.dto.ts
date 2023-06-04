import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { BaseQueryDto } from '../../base';

export class GetServiceDto extends BaseQueryDto {}

export class GetNearestServiceDto extends GetServiceDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  longitude: number;
}
