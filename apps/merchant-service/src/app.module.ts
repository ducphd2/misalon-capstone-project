import { MerchantDatabaseModule } from '@libs/database/connection/merchant';
import { Module } from '@nestjs/common';

import { BranchModule } from './branch/branch.module';
import { MerchantModule } from './merchant/merchant.module';

@Module({
  imports: [MerchantDatabaseModule, MerchantModule, BranchModule],
})
export class AppModule {}
