import { EDeviceOs } from '@libs/grpc-types/protos/device';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class DeviceInputDto {
  @Transform(({ value }: TransformFnParams) => +value)
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
