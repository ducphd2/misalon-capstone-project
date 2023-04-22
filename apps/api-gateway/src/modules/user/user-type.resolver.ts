import { QueryUtils } from '@libs/core';
import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { Merchant, User } from '@/api-gateway/types';

@Resolver(() => User)
export class UserTypeResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @ResolveField('merchants', () => [Merchant])
  async getBranches(@Parent() user: User, @Args('q', { nullable: true }) q?: string): Promise<Merchant[]> {
    const query = { where: { userId: user.id } };

    if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

    const { merchants } = await this.merchantService.find({
      ...query,
      where: JSON.stringify(query.where),
    });

    return merchants;
  }
}
