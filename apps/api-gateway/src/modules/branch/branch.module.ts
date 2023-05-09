import { Module } from '@nestjs/common';
import { MessageComponent } from '@libs/modules';

import { MerchantCommonModule } from '../merchant-common/merchant-common.module';

import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';

@Module({
  imports: [MerchantCommonModule],
  providers: [BranchService, MessageComponent],
  controllers: [BranchController],
})
export class BranchModule {}
