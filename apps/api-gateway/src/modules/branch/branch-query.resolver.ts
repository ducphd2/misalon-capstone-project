import { QueryUtils } from '@libs/core';
import { Branches } from '@libs/grpc-types/protos/branch';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { BranchPaging, BranchPayload, BranchesConnection } from '@/api-gateway/types';

@Resolver()
export class BranchQueryResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Query(() => BranchPayload)
  @UseGuards(GqlAuthGuard)
  async findBranchById(@Args('id') id: number): Promise<BranchPayload> {
    const result = await this.merchantService.findBranchById({ id });
    return result;
  }

  @Query(() => BranchesConnection)
  @UseGuards(GqlAuthGuard)
  async findAllBranches(@Args('q', { nullable: true }) q?: string): Promise<Branches> {
    const query = { where: {} };

    if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

    const result = await this.merchantService.branches({
      ...query,
      where: JSON.stringify(query.where),
    });
    return result;
  }

  @Query(() => BranchPaging)
  @UseGuards(GqlAuthGuard)
  async findAllBranchesByMerchant(
    @Args('merchantId') merchantId?: number,
    @Args('q', { nullable: true }) q?: string,
  ): Promise<BranchPaging> {
    try {
      const query = { where: { merchantId } };

      if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

      const result = await this.merchantService.findBranches({
        where: JSON.stringify(query.where),
      });

      return result;
    } catch (error) {
      console.log('Fetch all branch by merchant error, ', error);
      throw new Error(error);
    }
  }
}
