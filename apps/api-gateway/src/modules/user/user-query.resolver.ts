import { QueryUtils } from '@libs/core';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { CurrentUser } from '@/api-gateway/core/decorators';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import { User, UserPayload, UsersConnection } from '@/api-gateway/types/user';
import { ESortDirection } from '@/api-gateway/dtos/common';

@Resolver(() => UsersConnection)
export class UserQueryResolver {
  constructor(private readonly userService: UserCommonService, private readonly queryUtils: QueryUtils) {}

  @Query(() => UsersConnection)
  @UseGuards(GqlAuthGuard)
  async getUsers(
    @Args('merchantId', { nullable: true }) merchantId?: number,
    @Args('q', { nullable: true }) q?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('page', { nullable: true }) page?: number,
    @Args('orderBy', { nullable: true }) orderBy?: string,
    @Args('orderDirection', { type: () => ESortDirection, nullable: true }) orderDirection?: ESortDirection,
  ): Promise<UsersConnection> {
    const result = await this.userService.find({
      where: JSON.stringify({
        merchantId,
      }),
      searchKey: !isEmpty(q) ? `%${q}%` : undefined,
      page: page ? page : 1,
      limit: limit ? limit : 10,
      orderBy: orderBy ? orderBy : 'updatedAt',
      orderDirection: orderDirection ?? ESortDirection.DESC,
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
