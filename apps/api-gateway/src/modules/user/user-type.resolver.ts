import { QueryUtils } from '@libs/core';
import { Devices } from '@libs/grpc-types/protos/device';
import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { MerchantCommonService } from '../merchant-common/merchant-common.service';
import { UserCommonService } from '../user-common/user-common.service';

import { DevicePaging, Merchant, User } from '@/api-gateway/types';

@Resolver(() => User)
export class UserTypeResolver {
  constructor(
    private readonly merchantService: MerchantCommonService,
    private readonly queryUtils: QueryUtils,
    private readonly userService: UserCommonService,
  ) {}

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

  @ResolveField('devices', () => DevicePaging)
  async getDevices(@Parent() user: User): Promise<Devices> {
    const query = { where: { userId: user.id } };

    const result = await this.userService.findDevices({
      where: JSON.stringify(query.where),
    });

    return result;
  }
}
