import { QueryUtils } from '@libs/core';
import { Resolver } from '@nestjs/graphql';

import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { Branch } from '@/api-gateway/types';

@Resolver(() => Branch)
export class BranchTypeResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {
    //
  }
}
