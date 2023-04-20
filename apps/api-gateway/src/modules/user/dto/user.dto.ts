import { Match } from '@/api-gateway/core/decorators/user';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class ChangePasswordInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  currentPassword: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @Field()
  @Match('newPassword')
  @IsString()
  @IsNotEmpty()
  confirmPassword: string;
}
