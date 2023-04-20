import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { GroupMutationResolver } from './group-mutation.resolver';
import { GroupQueryResolver } from './group-query.resolver';
import { GroupTypeResolver } from './group-type.resolver';

import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';

@Module({
  imports: [MerchantCommonModule, UtilsModule],
  providers: [GroupQueryResolver, GroupMutationResolver, GroupTypeResolver],
})
export class GroupModule {}
