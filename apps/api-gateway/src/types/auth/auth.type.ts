import { Field, ObjectType } from '@nestjs/graphql';

import { User } from '@/api-gateway/types/user';

@ObjectType()
export class ResponseAuthGrpc {
  @Field(() => User)
  user: User;

  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}
