import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { MerchantController } from './merchant.controller';

import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';

@Module({
  imports: [MerchantCommonModule, UtilsModule],
  controllers: [MerchantController],
  providers: [],
})
export class MerchantModule {}
