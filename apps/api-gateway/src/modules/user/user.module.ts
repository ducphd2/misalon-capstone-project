import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { UserQueryResolver } from './user-query.resolver';
import { UserController } from './user.controller';

import { MessageComponent } from '@/api-gateway/core';
import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';
import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';
import { UserMutationResolver } from '@/api-gateway/modules/user/user-mutation.resolver';
import { UserTypeResolver } from '@/api-gateway/modules/user/user-type.resolver';

@Module({
  imports: [UserCommonModule, MerchantCommonModule, UtilsModule],
  controllers: [UserController],
  providers: [UserQueryResolver, UserMutationResolver, UserTypeResolver, MessageComponent],
})
export class UserModule {}
