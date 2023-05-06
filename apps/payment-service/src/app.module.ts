import { PaymentDatabaseModule } from '@libs/database';
import { Module } from '@nestjs/common';

import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [PaymentDatabaseModule, PaymentModule],
})
export class AppModule {}
