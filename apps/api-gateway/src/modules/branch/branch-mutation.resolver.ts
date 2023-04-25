import { BRANCH_MESSAGE, ErrorHelper, QueryUtils } from '@libs/core';
import { UserEntity } from '@libs/database/entities';
import { Count } from '@libs/grpc-types/protos/commons';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CurrentUser } from '@/api-gateway/core/decorators/user/current-user.decorator';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { CreateBranchInput, PartialUpdateBranch } from '@/api-gateway/dtos';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { BranchPayload, DeletePayload } from '@/api-gateway/types';

@Resolver()
export class BranchMutationResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Mutation(() => BranchPayload)
  @UseGuards(GqlAuthGuard)
  async createBranch(@CurrentUser() admin: UserEntity, @Args('data') data: CreateBranchInput): Promise<BranchPayload> {
    try {
      const branch = await this.merchantService.createBranch(data);
      return { branch };
    } catch (error) {
      console.log('Create branch error: ', error);
      throw new Error(error);
    }
  }

  @Mutation(() => BranchPayload)
  @UseGuards(GqlAuthGuard)
  async updateBranch(
    @CurrentUser() admin: UserEntity,
    @Args('id') id: number,
    @Args('data') data: PartialUpdateBranch,
  ): Promise<BranchPayload> {
    try {
      const { branch } = await this.merchantService.branch({
        where: JSON.stringify({
          id,
        }),
      });

      if (!branch) {
        ErrorHelper.HttpNotFoundException(BRANCH_MESSAGE.READ.NOT_FOUND);
      }

      const updatedBranch = await this.merchantService.updateBranch(id, data);
      return { branch: updatedBranch };
    } catch (error) {
      console.log('Update branch error: ', error);
      throw new Error(error);
    }
  }

  @Mutation(() => DeletePayload)
  @UseGuards(GqlAuthGuard)
  async deleteBranch(@CurrentUser() admin: UserEntity, @Args('id') id: number): Promise<Count> {
    try {
      const result = await this.merchantService.deleteBranch(id);
      return result;
    } catch (error) {
      console.log('Delete branch error: ', error);
      throw new Error(error);
    }
  }
}
