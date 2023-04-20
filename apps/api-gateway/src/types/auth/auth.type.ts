import { UserEntity } from '@libs/database/entities';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ResponseAuthGrpc {
  @Field(() => UserEntity)
  user: UserEntity;

  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}
