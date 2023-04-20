import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { BookingServer } from '@libs/grpc-types/servers';
import { AppModule } from './app.module';

async function main() {
  const app: INestMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, BookingServer);

  return app.listen();
}

main().then(() => {
  console.log('booking-service microservice is running');
});
