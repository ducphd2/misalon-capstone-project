import { QueryUtils } from '@libs/core';
import { UserEntity } from '@libs/database/entities';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { Merchant, MerchantConnection } from '@/api-gateway/types';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { CurrentUser } from '@/api-gateway/core/decorators/current-user.decorator';

@Resolver('merchant')
export class MerchantQueryResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Query(() => Merchant)
  @UseGuards(GqlAuthGuard)
  async findMerchantById(@Args('id') id: number): Promise<Merchant> {
    const { merchant } = await this.merchantService.findById({ id });
    return merchant;
  }

  @Query(() => MerchantConnection)
  @UseGuards(GqlAuthGuard)
  async findAllMerchants(
    @Args('q', { nullable: true }) q?: string,
    @Args('first', { nullable: true }) first?: number,
    @Args('last', { nullable: true }) last?: number,
    @Args('before', { nullable: true }) before?: string,
    @Args('after', { nullable: true }) after?: string,
    @Args('orderBy', { nullable: true }) orderBy?: string,
  ): Promise<MerchantConnection> {
    const query = { where: {} };

    if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

    merge(query, await this.queryUtils.buildQuery(orderBy, first, last, before, after));

    const result = await this.merchantService.find({
      ...query,
      where: JSON.stringify(query.where),
      select: [],
      orderBy: [],
    });
    return result;
  }

  @Query(() => MerchantConnection)
  @UseGuards(GqlAuthGuard)
  async findAllMerchantsByAdmin(
    @CurrentUser() admin: UserEntity,
    @Args('q', { nullable: true }) q?: string,
    @Args('first', { nullable: true }) first?: number,
    @Args('last', { nullable: true }) last?: number,
    @Args('before', { nullable: true }) before?: string,
    @Args('after', { nullable: true }) after?: string,
    @Args('orderBy', { nullable: true }) orderBy?: string,
  ): Promise<MerchantConnection> {
    try {
      const query = { where: { userId: admin.id } };

      if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

      merge(query, await this.queryUtils.buildQuery(orderBy, first, last, before, after));

      const result = await this.merchantService.find({
        ...query,
        where: JSON.stringify(query.where),
        select: [],
        orderBy: [],
      });
      return result;
    } catch (error) {
      console.log('Error, ', error);
      throw new Error(error);
    }
  }
}
