import { QueryUtils } from '@libs/core';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { Service, ServiceConnection, ServiceOffsetPagination } from '@/api-gateway/types';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { ESortDirection } from '@/api-gateway/dtos/common';

@Resolver(() => Service)
export class ServiceQueryResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Query(() => Service)
  @UseGuards(GqlAuthGuard)
  async findServiceById(@Args('id') id: number): Promise<Service> {
    const { branch } = await this.merchantService.findBranchById({ id });
    return branch;
  }

  @Query(() => ServiceConnection)
  @UseGuards(GqlAuthGuard)
  async findAllBranchServices(@Args('q', { nullable: true }) q?: string): Promise<ServiceConnection> {
    const query = { where: {} };

    if (!isEmpty(q)) merge(query, { where: { fullName: { _iLike: `%${q}%` } } });

    const result = await this.merchantService.findService({
      ...query,
      where: JSON.stringify(query.where),
    });

    return result;
  }

  @Query(() => ServiceOffsetPagination)
  @UseGuards(GqlAuthGuard)
  async findAllBranchServicesByMerchant(
    @Args('merchantId') merchantId: number,
    @Args('q', { nullable: true }) q?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('page', { nullable: true }) page?: number,
    @Args('orderBy', { nullable: true }) orderBy?: string,
    @Args('orderDirection', { type: () => ESortDirection, nullable: true }) orderDirection?: ESortDirection,
  ): Promise<ServiceOffsetPagination> {
    try {
      const query = {
        where: {
          merchantId,
        },
        searchKey: !isEmpty(q) ? `%${q}%` : undefined,
        page: page ? page : 1,
        limit: limit ? limit : 10,
        orderBy: orderBy ? orderBy : 'updatedAt',
        orderDirection: orderDirection ?? ESortDirection.DESC,
      };

      const result = await this.merchantService.findServiceOffsetPagination({
        ...query,
        where: JSON.stringify(query.where),
      });
      return result;
    } catch (error) {
      console.log('Fetch all service offset pagination error, ', error);
      throw new Error(error);
    }
  }

  @Query(() => ServiceOffsetPagination)
  @UseGuards(GqlAuthGuard)
  async customerFindAllServices(
    @Args('q', { nullable: true }) q?: string,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('page', { nullable: true }) page?: number,
    @Args('orderBy', { nullable: true }) orderBy?: string,
    @Args('orderDirection', { type: () => ESortDirection, nullable: true }) orderDirection?: ESortDirection,
  ): Promise<ServiceOffsetPagination> {
    try {
      const query = {
        searchKey: !isEmpty(q) ? q.toString() : undefined,
        page: page ? page : 1,
        limit: limit ? limit : 10,
        orderBy: orderBy ? orderBy : 'updatedAt',
        orderDirection: orderDirection ?? ESortDirection.DESC,
        where: {},
      };

      const result = await this.merchantService.findServiceOffsetPagination({
        ...query,
        where: JSON.stringify(query.where),
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
