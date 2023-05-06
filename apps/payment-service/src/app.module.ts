import { PaymentDatabaseModule } from '@libs/database';
import { Module } from '@nestjs/common';
import { BullQueueModule } from '@libs/modules';
import { ConfigModule } from '@nestjs/config';

import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
    PaymentDatabaseModule,
    PaymentModule,
    BullQueueModule,
  ],
})
export class AppModule {}
