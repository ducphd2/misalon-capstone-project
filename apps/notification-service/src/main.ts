import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { NotificationServer } from '@libs/grpc-types';

async function main() {
  const app: INestMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    NotificationServer,
  );

  return app.listen();
}

main().then(() => {
  console.log('notification-service microservice is running');
});
