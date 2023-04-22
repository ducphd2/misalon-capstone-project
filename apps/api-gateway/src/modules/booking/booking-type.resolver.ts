import { QueryUtils } from '@libs/core';
import { Resolver } from '@nestjs/graphql';

import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { Booking } from '@/api-gateway/types';
import { BookingCommonService } from '@/api-gateway/modules/booking-common/booking-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';

@Resolver(() => Booking)
export class BookingTypeResolver {
  constructor(
    private readonly bookingService: BookingCommonService,
    private readonly userService: UserCommonService,
    private readonly merchantService: MerchantCommonService,
    private readonly queryUtils: QueryUtils,
  ) {}
}
