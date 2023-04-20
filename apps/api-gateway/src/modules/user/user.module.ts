import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { UserQueryResolver } from './user-query.resolver';

import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';
import { UserMutationResolver } from '@/api-gateway/modules/user/user-mutation.resolver';

@Module({
  imports: [UserCommonModule, UtilsModule],
  providers: [UserQueryResolver, UserMutationResolver],
})
export class UserModule {}
