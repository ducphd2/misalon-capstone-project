import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { BranchMutationResolver } from '@/api-gateway/modules/branch/branch-mutation.resolver';
import { BranchQueryResolver } from '@/api-gateway/modules/branch/branch-query.resolver';
import { BranchTypeResolver } from '@/api-gateway/modules/branch/branch-type.resolver';
import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';

@Module({
  imports: [MerchantCommonModule, UtilsModule],
  providers: [BranchQueryResolver, BranchMutationResolver, BranchTypeResolver],
})
export class BranchModule {}
