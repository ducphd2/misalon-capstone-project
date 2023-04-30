import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { EDeviceOs } from '@/api-gateway/dtos/common';

export class DeviceInputDto {
  @IsEnum(EDeviceOs)
  @IsNotEmpty()
  os: EDeviceOs;

  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @IsString()
  @IsNotEmpty()
  token: string;
}
