import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { BookingMutationResolver } from './booking-mutation.resolver';
import { BookingQueryResolver } from './booking-query.resolver';
import { BookingTypeResolver } from './booking-type.resolver';

import { BookingCommonModule } from '@/api-gateway/modules/booking-common/booking-common.module';
import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';
import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';

@Module({
  imports: [BookingCommonModule, UserCommonModule, MerchantCommonModule, UtilsModule],
  providers: [BookingQueryResolver, BookingMutationResolver, BookingTypeResolver],
})
export class BookingModule {}
