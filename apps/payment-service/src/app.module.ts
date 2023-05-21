import { DatabaseModule } from '@libs/database';
import { BullQueueModule } from '@libs/modules';
import { Module } from '@nestjs/common';

import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [DatabaseModule, PaymentModule, BullQueueModule],
})
export class AppModule {}
