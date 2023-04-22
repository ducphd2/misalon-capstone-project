import { QueryUtils } from '@libs/core';
import { UserEntity } from '@libs/database/entities';
import { Merchants } from '@libs/grpc-types/protos/merchant';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { CurrentUser } from '@/api-gateway/core/decorators/user/current-user.decorator';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { Merchant, MerchantsConnection } from '@/api-gateway/types';

@Resolver(() => Merchant)
export class MerchantQueryResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Query(() => Merchant)
  @UseGuards(GqlAuthGuard)
  async findMerchantById(@Args('id') id: number): Promise<Merchant> {
    const { merchant } = await this.merchantService.findById({ id });
    return merchant;
  }

  @Query(() => MerchantsConnection)
  @UseGuards(GqlAuthGuard)
  async findAllMerchants(@Args('q', { nullable: true }) q?: string): Promise<Merchants> {
    const query = { where: {} };

    if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

    const result = await this.merchantService.find({
      ...query,
      where: JSON.stringify(query.where),
    });
    return result;
  }

  @Query(() => MerchantsConnection)
  @UseGuards(GqlAuthGuard)
  async findAllMerchantsByAdmin(
    @CurrentUser() admin: UserEntity,
    @Args('q', { nullable: true }) q?: string,
  ): Promise<Merchants> {
    try {
      const query = { where: { userId: admin.id } };

      if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

      const result = await this.merchantService.find({
        ...query,
        where: JSON.stringify(query.where),
      });

      return result;
    } catch (error) {
      console.log('Error, ', error);
      throw new Error(error);
    }
  }
}
