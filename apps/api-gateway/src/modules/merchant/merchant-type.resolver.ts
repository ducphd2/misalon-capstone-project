import { QueryUtils } from '@libs/core';
import { BranchPagination } from '@libs/grpc-types/protos/branch';
import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { BranchPaging, Merchant } from '@/api-gateway/types';

@Resolver(() => Merchant)
export class MerchantTypeResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @ResolveField('branches', () => BranchPaging)
  async getBranches(
    @Parent() merchant: Merchant,
    @Args('q', { nullable: true }) q?: string,
  ): Promise<BranchPagination> {
    const query = { where: { merchantId: merchant.id } };

    if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

    const result = await this.merchantService.findBranches({
      ...query,
      where: JSON.stringify(query.where),
    });

    return result;
  }
}
