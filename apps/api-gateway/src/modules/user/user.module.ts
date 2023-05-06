import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';
import { MessageComponent } from '@libs/modules';

import { UserController } from './user.controller';

import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';
import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';
import { BookingCommonModule } from '@/api-gateway/modules/booking-common/booking-common.module';

@Module({
  imports: [UserCommonModule, MerchantCommonModule, UtilsModule, BookingCommonModule],
  controllers: [UserController],
  providers: [MessageComponent],
})
export class UserModule {}
