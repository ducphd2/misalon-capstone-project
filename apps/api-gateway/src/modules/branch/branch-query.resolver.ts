import { QueryUtils } from '@libs/core';
import { UserEntity } from '@libs/database/entities';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';
import { Branches } from '@libs/grpc-types/protos/branch';

import { Branch, BranchConnection, BranchesConnection } from '@/api-gateway/types';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { CurrentUser } from '@/api-gateway/core/decorators/user/current-user.decorator';

@Resolver(() => Branch)
export class BranchQueryResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Query(() => Branch)
  @UseGuards(GqlAuthGuard)
  async findBranchById(@Args('id') id: number): Promise<Branch> {
    const { branch } = await this.merchantService.findBranchById({ id });
    return branch;
  }

  @Query(() => BranchesConnection)
  @UseGuards(GqlAuthGuard)
  async findAllBranches(@Args('q', { nullable: true }) q?: string): Promise<Branches> {
    const query = { where: {} };

    if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

    const result = await this.merchantService.findBranches({
      ...query,
      where: JSON.stringify(query.where),
    });
    return result;
  }

  @Query(() => BranchConnection)
  @UseGuards(GqlAuthGuard)
  async findAllBranchesByMerchant(
    @Args('merchantId') merchantId?: number,
    @Args('q', { nullable: true }) q?: string,
  ): Promise<Branches> {
    try {
      const query = { where: { merchantId } };

      if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

      const result = await this.merchantService.findBranches({
        ...query,
        where: JSON.stringify(query.where),
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
  ): Promise<Branches> {
    try {
      const query = { where: { userId: admin.id } };

      if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

      const result = await this.merchantService.findBranches({
        ...query,
        where: JSON.stringify(query.where),
      });

      return result;
    } catch (error) {
      console.log('Fetch all branch by admin error, ', error);
      throw new Error(error);
    }
  }
}
