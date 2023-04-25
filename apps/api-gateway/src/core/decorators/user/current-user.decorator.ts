import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { User } from '@/api-gateway/types';

export const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext): User => {
  const ctx = GqlExecutionContext.create(context);
  return ctx.getContext().req.user;
});
