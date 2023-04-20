import { QueryUtils } from '@libs/core';
import { Resolver } from '@nestjs/graphql';

import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { Service } from '@/api-gateway/types';

@Resolver(() => Service)
export class ServiceTypeResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {
    //
  }
}
