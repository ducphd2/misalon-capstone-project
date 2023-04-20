import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';
import { MerchantMutationResolver } from '@/api-gateway/modules/merchant/merchant-mutation.resolver';
import { MerchantQueryResolver } from '@/api-gateway/modules/merchant/merchant-query.resolver';
import { MerchantTypeResolver } from '@/api-gateway/modules/merchant/merchant-type.resolver';

@Module({
  imports: [MerchantCommonModule, UtilsModule],
  providers: [MerchantQueryResolver, MerchantMutationResolver, MerchantTypeResolver],
})
export class MerchantModule {}
