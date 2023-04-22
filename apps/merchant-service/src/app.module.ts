import { MerchantDatabaseModule } from '@libs/database/connection/merchant';
import { Module } from '@nestjs/common';

import { MerchantModule } from './merchant/merchant.module';
import { BranchModule } from './branch/branch.module';

@Module({
  imports: [MerchantDatabaseModule, MerchantModule, BranchModule],
})
export class AppModule {}
