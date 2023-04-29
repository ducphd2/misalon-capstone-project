import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { UserController } from './user.controller';

import { MessageComponent } from '@/api-gateway/core';
import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';
import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';
import { BookingCommonModule } from '@/api-gateway/modules/booking-common/booking-common.module';

@Module({
  imports: [UserCommonModule, MerchantCommonModule, UtilsModule, BookingCommonModule],
  controllers: [UserController],
  providers: [MessageComponent],
})
export class UserModule {}
