import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

import { DeviceInputDto } from '@/api-gateway/dtos/user';

@InputType()
export class BaseAuthInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  password: string;
}

@InputType()
export class InputLoginRequest extends BaseAuthInput {
  @Field(() => DeviceInputDto, { nullable: true })
  device?: DeviceInputDto;
}
