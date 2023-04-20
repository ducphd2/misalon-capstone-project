import { QueryUtils } from '@libs/core';
import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { BranchConnection, Merchant } from '@/api-gateway/types';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';

@Resolver(() => Merchant)
export class MerchantTypeResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @ResolveField('branches', () => BranchConnection)
  async getBranches(
    @Parent() merchant: Merchant,
    @Args('q', { nullable: true }) q?: string,
    @Args('first', { nullable: true }) first?: number,
    @Args('last', { nullable: true }) last?: number,
    @Args('before', { nullable: true }) before?: string,
    @Args('after', { nullable: true }) after?: string,
    @Args('orderBy', { nullable: true }) orderBy?: string,
  ): Promise<BranchConnection> {
    const query = { where: { merchantId: merchant.id } };

    if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

    merge(query, await this.queryUtils.buildQuery(orderBy, first, last, before, after));

    const branches = await this.merchantService.findBranches({
      ...query,
      where: JSON.stringify(query.where),
      select: null,
      orderBy: null,
    });

    return branches;
  }
}
