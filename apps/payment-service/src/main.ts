import { PaymentServer } from '@libs/grpc-types';
import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function main() {
  const app: INestMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, PaymentServer);

  return app.listen();
}

main().then(() => {
  console.log('payment-service microservice is running');
});
