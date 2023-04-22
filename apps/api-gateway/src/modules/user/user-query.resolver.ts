import { QueryUtils } from '@libs/core';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { CurrentUser } from '@/api-gateway/core/decorators';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import { User, UserPayload, UsersConnection } from '@/api-gateway/types/user';

@Resolver(() => UsersConnection)
export class UserQueryResolver {
  constructor(private readonly userService: UserCommonService, private readonly queryUtils: QueryUtils) {}

  @Query(() => UsersConnection)
  @UseGuards(GqlAuthGuard)
  async getUsers(
    @Args('q', { nullable: true }) q?: string,
    @Args('first', { nullable: true }) first?: number,
    @Args('last', { nullable: true }) last?: number,
    @Args('before', { nullable: true }) before?: string,
    @Args('after', { nullable: true }) after?: string,
    @Args('orderBy', { nullable: true }) orderBy?: string,
  ): Promise<UsersConnection> {
    const query = { where: {} };

    if (!isEmpty(q)) merge(query, { where: { fullName: { _iLike: `%${q}%` } } });

    merge(query, await this.queryUtils.buildQuery(orderBy, first, last, before, after));

    const result = await this.userService.find({
      ...query,
      where: JSON.stringify(query.where),
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
