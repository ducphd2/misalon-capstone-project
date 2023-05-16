import { TransformInterceptor } from '@libs/interceptors';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';

import { AppModule } from './app.module';

import { HttpExceptionFilter } from '@/api-gateway/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  app.enableCors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
  });
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useWebSocketAdapter(new IoAdapter(app));
  app.setGlobalPrefix('api');

  app.enableShutdownHooks();

  await app.listen(configService.get<number>('PORT'));
  return app;
}

bootstrap().then(async (app) => {
  console.log(`gateway is running on : ${await app.getUrl()}`);
});
