import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { UserServer } from '@libs/grpc-types';

import { AppModule } from './app.module';

async function main() {
  const app: INestMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, UserServer);

  return app.listen();
}

main().then(() => {
  console.log('user-service microservice is running');
});
