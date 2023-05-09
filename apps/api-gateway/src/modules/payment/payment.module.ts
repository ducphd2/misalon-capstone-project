import { LangModule, MessageComponent } from '@libs/modules';
import { Module } from '@nestjs/common';

import { PaymentCommonModule } from '../payment-common/payment-common.module';

import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [PaymentCommonModule],
  providers: [PaymentService, MessageComponent],
  controllers: [PaymentController],
})
export class PaymentModule {}
