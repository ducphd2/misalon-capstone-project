import { QueryUtils } from '@libs/core';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { CurrentUser } from '@/api-gateway/core/decorators';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { ESortDirection } from '@/api-gateway/dtos/common';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import { User, UserPaging, UserPayload } from '@/api-gateway/types';

@Resolver()
export class UserQueryResolver {
  constructor(private readonly userService: UserCommonService, private readonly queryUtils: QueryUtils) {}

  @Query(() => UserPaging)
  @UseGuards(GqlAuthGuard)
  async getUsersByMerchant(
    @Args('merchantId') merchantId: number,
    @Args('q', { nullable: true }) q?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('page', { nullable: true }) page?: number,
    @Args('orderBy', { nullable: true }) orderBy?: string,
    @Args('orderDirection', { type: () => ESortDirection, nullable: true }) orderDirection?: string,
  ): Promise<UserPaging> {
    const result = await this.userService.find({
      where: JSON.stringify({
        merchantId,
      }),
      searchKey: !isEmpty(q) ? `%${q}%` : undefined,
      page: page ? page : 1,
      limit: limit ? limit : 10,
      orderBy: orderBy ? orderBy : 'updatedAt',
      orderDirection: 'DESC',
    });

    return result;
  }

  @Query(() => UserPayload)
  @UseGuards(GqlAuthGuard)
  async getUser(@Args('id') id: number): Promise<User> {
    const { user } = await this.userService.findById({ id });
    return user;
  }

  @Query(() => Number, { name: 'userCount' })
  @UseGuards(GqlAuthGuard)
  async getUserCount(@Args('q', { nullable: true }) q: string): Promise<number> {
    // TODO: To implements filter by ...

    const query = { where: {} };

    if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

    const { count } = await this.userService.countUser({
      where: JSON.stringify(query.where),
    });
    return count;
  }

  @Query(() => UserPayload, { name: 'me' })
  @UseGuards(GqlAuthGuard)
  async me(@CurrentUser() currentUser: User): Promise<UserPayload> {
    const user = await this.userService.findById({ id: currentUser.id });
    return user;
  }
}
