import { EBullQueue } from '@libs/core';
import { BullModule } from '@nestjs/bull';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { BullQueueProvider } from './bull-producer.service';

@Global()
@Module({
  imports: [
    BullModule.registerQueue({
      name: EBullQueue.NOTIFICATION_QUEUE,
    }),
    BullModule.registerQueue({
      name: EBullQueue.GATEWAY_QUEUE,
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get<string>('REDIS_HOST'),
          username: configService.get<string>('REDIS_USERNAME'),
          port: configService.get<number>('REDIS_PORT'),
          password: configService.get<string>('REDIS_PASSWORD'),
          db: configService.get<number>('REDIS_DB') ?? 0,
        },
        defaultJobOptions: {
          removeOnComplete: true,
          removeOnFail: false,
          timeout: 30000,
          attempts: 3,
          backoff: 3000,
          delay: 1000,
          stackTraceLimit: 10,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [BullQueueProvider],
  exports: [BullQueueProvider],
})
export class BullQueueModule {}
