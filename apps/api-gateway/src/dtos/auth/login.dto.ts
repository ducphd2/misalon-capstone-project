import { IsEmail, IsNotEmpty } from 'class-validator';

import { DeviceInputDto } from '@/api-gateway/dtos/user';

export class BaseAuthInput {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class InputLoginRequest extends BaseAuthInput {
  device?: DeviceInputDto;
}
