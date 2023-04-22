import { QueryUtils } from '@libs/core';
import { Devices } from '@libs/grpc-types/protos/device';
import { MerchantPagination } from '@libs/grpc-types/protos/merchant';
import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';

import { MerchantCommonService } from '../merchant-common/merchant-common.service';
import { UserCommonService } from '../user-common/user-common.service';

import { DevicePaging, MerchantPaging, User } from '@/api-gateway/types';

@Resolver(() => User)
export class UserTypeResolver {
  constructor(
    private readonly merchantService: MerchantCommonService,
    private readonly queryUtils: QueryUtils,
    private readonly userService: UserCommonService,
  ) {}

  @ResolveField('merchants', () => MerchantPaging)
  async getMerchants(@Parent() user: User, @Args('q', { nullable: true }) q?: string): Promise<MerchantPagination> {
    const query = { where: { userId: user.id } };

    if (!isEmpty(q)) merge(query, { where: { name: { _iLike: `%${q}%` } } });

    const result = await this.merchantService.find({
      ...query,
      where: JSON.stringify(query.where),
    });

    return result;
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
