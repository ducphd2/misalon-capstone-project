import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { TokenDto } from '@/api-gateway/dtos';

export const Token = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  const headers = request.headers as unknown as Record<string, unknown>;
  return new TokenDto({
    lang: !headers['lang'] ? 'en' : headers['lang'],
  });
});
