import { QueryUtils } from '@libs/core';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { isEmpty, merge } from 'lodash';

import { BookingCommonService } from '@/api-gateway/modules/booking-common/booking-common.service';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import { Booking, BookingPaginationResponse } from '@/api-gateway/types';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { ESortDirection } from '@/api-gateway/dtos/user/user.dto';

@Resolver(() => Booking)
export class BookingQueryResolver {
  constructor(
    private readonly bookingService: BookingCommonService,
    private readonly userService: UserCommonService,
    private readonly merchantService: MerchantCommonService,
    private readonly queryUtils: QueryUtils,
  ) {}

  @Query(() => BookingPaginationResponse)
  @UseGuards(GqlAuthGuard)
  async findAllBooking(
    @Args('q', { nullable: true }) q?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('page', { nullable: true }) page?: number,
    @Args('orderBy', { nullable: true }) orderBy?: string,
    @Args('orderDirection', { type: () => ESortDirection, nullable: true }) orderDirection?: ESortDirection,
  ): Promise<BookingPaginationResponse> {
    const query = { where: {} };

    if (!isEmpty(q))
      merge(query, {
        where: {
          serviceName: {
            _iLike: `%${q}%`,
          },
        },
      });

    const result = await this.bookingService.find({
      where: JSON.stringify(query.where),
      searchKey: !isEmpty(q) ? `%${q}%` : undefined,
      page: page ? page : 1,
      limit: limit ? limit : 10,
      orderBy: orderBy ? orderBy : 'updatedAt',
      orderDirection: orderDirection ?? ESortDirection.DESC,
    });

    return result;
  }
}
