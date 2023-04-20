import { UserEntity } from '@libs/database/entities';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CurrentUser } from '@/api-gateway/core/decorators/current-user.decorator';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { CreateMerchantInput, Merchant } from '@/api-gateway/types';

@Resolver(() => Merchant)
export class MerchantMutationResolver {
  constructor(private readonly merchantService: MerchantCommonService) {}

  @Mutation(() => Merchant)
  @UseGuards(GqlAuthGuard)
  async createMerchant(@CurrentUser() admin: UserEntity, @Args('data') data: CreateMerchantInput): Promise<Merchant> {
    try {
      const result = await this.merchantService.create(data);
      return result;
    } catch (error) {
      console.log('Create merchant error: ', error);
      throw new Error(error);
    }
  }
}
