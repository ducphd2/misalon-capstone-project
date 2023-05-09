import { MessageComponent } from '@libs/modules';
import { Module } from '@nestjs/common';
import { UtilsModule } from '@libs/core';

import { BookingCommonModule } from '../booking-common/booking-common.module';
import { MerchantCommonModule } from '../merchant-common/merchant-common.module';
import { UserCommonModule } from '../user-common/user-common.module';

import { UserController } from './user.controller';

@Module({
  imports: [UtilsModule, UserCommonModule, MerchantCommonModule, BookingCommonModule],
  controllers: [UserController],
  providers: [MessageComponent],
})
export class UserModule {}
