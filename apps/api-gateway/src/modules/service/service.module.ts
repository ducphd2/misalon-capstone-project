import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { ServiceMutationResolver } from './service-mutation.resolver';
import { ServiceQueryResolver } from './service-query.resolver';
import { ServiceTypeResolver } from './service-type.resolver';

import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';

@Module({
  imports: [MerchantCommonModule, UtilsModule],
  providers: [ServiceQueryResolver, ServiceMutationResolver, ServiceTypeResolver],
})
export class ServiceModule {}
