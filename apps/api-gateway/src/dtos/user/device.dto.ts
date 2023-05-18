import { EDeviceOs } from '@libs/grpc-types/protos/device';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

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
