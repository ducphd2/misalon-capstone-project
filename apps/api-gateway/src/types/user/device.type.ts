import { Field, ID, InputType, ObjectType, PartialType } from '@nestjs/graphql';

import { DeviceInputDto } from '@/api-gateway/dtos';
import { EDeviceOs } from '@/api-gateway/dtos/user/user.dto';
import { BaseType } from '@/api-gateway/types/base';

@ObjectType()
export class Device extends BaseType {
  @Field(() => ID)
  userId: number;

  @Field(() => EDeviceOs)
  os: EDeviceOs;

  @Field(() => String)
  deviceId: string;

  @Field(() => String)
  token: string;
}

@InputType()
export class PartialAuthDeviceInputDto extends PartialType<DeviceInputDto>(DeviceInputDto) {}
