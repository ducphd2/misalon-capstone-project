import { PartialType } from '@nestjs/mapped-types';

import { DeviceInputDto } from '@/api-gateway/dtos';
import { EDeviceOs } from '@/api-gateway/dtos/common';
import { BaseType, PageMeta } from '@/api-gateway/types/base';

export class Device extends BaseType {
  userId?: number;

  os?: EDeviceOs;

  deviceId?: string;

  token?: string;
}

export class PartialAuthDeviceInputDto extends PartialType<DeviceInputDto>(DeviceInputDto) {}

export class DevicePaging {
  items?: Device[];

  meta?: PageMeta;
}
