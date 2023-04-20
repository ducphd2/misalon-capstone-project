import { QueryUtils } from '@libs/core';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { Group, GroupConnection } from '@/api-gateway/types';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';

@Resolver(() => Group)
export class GroupQueryResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Query(() => Group)
  @UseGuards(GqlAuthGuard)
  async findBranchById(@Args('id') id: number): Promise<Group> {
    const { group } = await this.merchantService.findGroupById({ id });
    return group;
  }
  @Query(() => GroupConnection)
  @UseGuards(GqlAuthGuard)
  async findAllServiceGroups(
    @Args('q', { nullable: true }) q?: string,
    @Args('first', { nullable: true }) first?: number,
    @Args('last', { nullable: true }) last?: number,
    @Args('before', { nullable: true }) before?: string,
    @Args('after', { nullable: true }) after?: string,
    @Args('orderBy', { nullable: true }) orderBy?: string,
  ): Promise<GroupConnection> {
    const query = { where: {} };

    if (!isEmpty(q)) merge(query, { where: { fullName: { _iLike: `%${q}%` } } });

    merge(query, await this.queryUtils.buildQuery(orderBy, first, last, before, after));

    const result = await this.merchantService.findGroups({
      ...query,
      where: JSON.stringify(query.where),
      select: null,
      orderBy: null,
    });

    return result;
  }
}
