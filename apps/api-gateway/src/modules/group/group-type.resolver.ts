import { QueryUtils } from '@libs/core';
import { Resolver } from '@nestjs/graphql';

import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { Group } from '@/api-gateway/types';

@Resolver(() => Group)
export class GroupTypeResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {
    //
  }
}
