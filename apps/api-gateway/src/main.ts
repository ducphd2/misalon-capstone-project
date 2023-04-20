import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { graphqlUploadExpress } from 'graphql-upload-minimal';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  app.useGlobalPipes(new ValidationPipe());

  app.use((req: any, res: any, next: any) => {
    if (req.url.includes('/graphql')) {
      // only graphql request
      graphqlUploadExpress({
        maxFileSize: 1000000,
        maxFiles: 10,
      })(req, res, next);
    } else {
      next();
    }
  });

  await app.listen(configService.get<number>('PORT'));
  return app;
}

bootstrap().then(async (app) => {
  console.log(`gateway is running on : ${await app.getUrl()}`);
});
