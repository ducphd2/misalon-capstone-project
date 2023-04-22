import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { EDeviceOs } from '@/api-gateway/dtos/user/user.dto';

@InputType()
export class DeviceInputDto {
  @Field(() => EDeviceOs)
  @IsEnum(EDeviceOs)
  @IsNotEmpty()
  os: EDeviceOs;

  @Field()
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  token: string;
}
