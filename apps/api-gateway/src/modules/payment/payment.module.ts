import { UtilsModule } from '@libs/core';
import { LangModule, MessageComponent } from '@libs/modules';
import { Module } from '@nestjs/common';

import { PaymentCommonModule } from '../payment-common/payment-common.module';

import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [PaymentCommonModule, UtilsModule],
  providers: [PaymentService, MessageComponent],
  controllers: [PaymentController],
})
export class PaymentModule {}
