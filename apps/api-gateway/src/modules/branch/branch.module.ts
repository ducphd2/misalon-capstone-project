import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { MerchantCommonModule } from '../merchant-common/merchant-common.module';

import { BranchService } from './branch.service';

import { MessageComponent } from '@/api-gateway/core';

@Module({
  imports: [MerchantCommonModule, UtilsModule],
  providers: [BranchService, MessageComponent],
})
export class BranchModule {}
