import { QueryUtils } from '@libs/core';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { GroupPaging, GroupPayload } from '@/api-gateway/types';

@Resolver()
export class GroupQueryResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Query(() => GroupPayload)
  @UseGuards(GqlAuthGuard)
  async findGroupById(@Args('id') id: number): Promise<GroupPayload> {
    const group = await this.merchantService.findGroupById({ id });
    return group;
  }

  @Query(() => GroupPaging)
  @UseGuards(GqlAuthGuard)
  async findAllGroups(
    @Args('merchantId', { nullable: false }) merchantId: number,
    @Args('q', { nullable: true }) q?: string,
  ): Promise<GroupPaging> {
    const query = { where: { merchantId } };

    if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

    const result = await this.merchantService.findGroups({
      ...query,
      where: JSON.stringify(query.where),
    });

    return result;
  }
}
