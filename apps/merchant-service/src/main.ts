import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { MerchantServer } from '@libs/grpc-types/servers';
import { AppModule } from './app.module';

async function main() {
  const app: INestMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, MerchantServer);

  return app.listen();
}

main().then(() => {
  console.log('merchant-service microservice is running');
});
