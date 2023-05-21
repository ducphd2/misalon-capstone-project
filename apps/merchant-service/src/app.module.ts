import { DatabaseModule } from '@libs/database';
import { Module } from '@nestjs/common';

import { BranchModule } from './branch/branch.module';
import { MerchantModule } from './merchant/merchant.module';

@Module({
  imports: [DatabaseModule, MerchantModule, BranchModule],
})
export class AppModule {}
