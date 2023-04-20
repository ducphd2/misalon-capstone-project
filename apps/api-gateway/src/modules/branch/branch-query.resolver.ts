import { QueryUtils } from '@libs/core';
import { UserEntity } from '@libs/database/entities';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { Branch, BranchConnection } from '@/api-gateway/types';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { CurrentUser } from '@/api-gateway/core/decorators/current-user.decorator';

@Resolver(() => Branch)
export class BranchQueryResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Query(() => Branch)
  @UseGuards(GqlAuthGuard)
  async findBranchById(@Args('id') id: number): Promise<Branch> {
    const { branch } = await this.merchantService.findBranchById({ id });
    return branch;
  }

  @Query(() => BranchConnection)
  @UseGuards(GqlAuthGuard)
  async findAllBranches(
    @Args('q', { nullable: true }) q?: string,
    @Args('first', { nullable: true }) first?: number,
    @Args('last', { nullable: true }) last?: number,
    @Args('before', { nullable: true }) before?: string,
    @Args('after', { nullable: true }) after?: string,
    @Args('orderBy', { nullable: true }) orderBy?: string,
  ): Promise<BranchConnection> {
    const query = { where: {} };

    if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

    merge(query, await this.queryUtils.buildQuery(orderBy, first, last, before, after));

    const result = await this.merchantService.findBranches({
      ...query,
      where: JSON.stringify(query.where),
      select: null,
      orderBy: null,
    });
    return result;
  }

  @Query(() => BranchConnection)
  @UseGuards(GqlAuthGuard)
  async findAllBranchesByMerchant(
    @Args('merchantId') merchantId?: number,
    @Args('q', { nullable: true }) q?: string,
    @Args('first', { nullable: true }) first?: number,
    @Args('last', { nullable: true }) last?: number,
    @Args('before', { nullable: true }) before?: string,
    @Args('after', { nullable: true }) after?: string,
    @Args('orderBy', { nullable: true }) orderBy?: string,
  ): Promise<BranchConnection> {
    try {
      const query = { where: { merchantId } };

      if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

      merge(query, await this.queryUtils.buildQuery(orderBy, first, last, before, after));

      const result = await this.merchantService.findBranches({
        ...query,
        where: JSON.stringify(query.where),
        select: null,
        orderBy: null,
      });
      return result;
    } catch (error) {
      console.log('Fetch all branch by merchant error, ', error);
      throw new Error(error);
    }
  }

  @Query(() => BranchConnection)
  @UseGuards(GqlAuthGuard)
  async findAllBranchesByAdmin(
    @CurrentUser() admin: UserEntity,
    @Args('q', { nullable: true }) q?: string,
    @Args('first', { nullable: true }) first?: number,
    @Args('last', { nullable: true }) last?: number,
    @Args('before', { nullable: true }) before?: string,
    @Args('after', { nullable: true }) after?: string,
    @Args('orderBy', { nullable: true }) orderBy?: string,
  ): Promise<BranchConnection> {
    try {
      const query = { where: { userId: admin.id } };

      if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

      merge(query, await this.queryUtils.buildQuery(orderBy, first, last, before, after));

      const result = await this.merchantService.findBranches({
        ...query,
        where: JSON.stringify(query.where),
        select: null,
        orderBy: null,
      });
      return result;
    } catch (error) {
      console.log('Fetch all branch by admin error, ', error);
      throw new Error(error);
    }
  }
}
