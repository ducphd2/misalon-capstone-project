import { MessageComponent } from '@libs/modules';
import { Module } from '@nestjs/common';

import { PaymentCommonModule } from '../payment-common/payment-common.module';

import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';

import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';
import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';

@Module({
  imports: [PaymentCommonModule, UserCommonModule, MerchantCommonModule],
  providers: [StatisticsService, MessageComponent],
  controllers: [StatisticsController],
})
export class StatisticsModule {}
