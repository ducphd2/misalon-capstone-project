import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { UserQueryResolver } from './user-query.resolver';

import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';
import { UserMutationResolver } from '@/api-gateway/modules/user/user-mutation.resolver';
import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';
import { UserTypeResolver } from '@/api-gateway/modules/user/user-type.resolver';

@Module({
  imports: [UserCommonModule, MerchantCommonModule, UtilsModule],
  providers: [UserQueryResolver, UserMutationResolver, UserTypeResolver],
})
export class UserModule {}
