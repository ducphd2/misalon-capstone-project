import { PaymentClient } from '@libs/grpc-types';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { PaymentCommonService } from './payment-common.service';

@Module({
  imports: [ClientsModule.register([PaymentClient])],
  providers: [PaymentCommonService],
  exports: [PaymentCommonService],
})
export class PaymentCommonModule {}
