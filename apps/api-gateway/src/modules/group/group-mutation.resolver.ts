import { QueryUtils } from '@libs/core';
import { UserModel } from '@libs/database/entities';
import { Count } from '@libs/grpc-types/protos/commons';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CurrentUser } from '@/api-gateway/core/decorators/user/current-user.decorator';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { DeletePayload, Group, GroupPayload } from '@/api-gateway/types';
import { CreateGroupInput, PartialUpdateGroup } from '@/api-gateway/dtos';

@Resolver(() => Group)
export class GroupMutationResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Mutation(() => GroupPayload)
  @UseGuards(GqlAuthGuard)
  async createGroup(@CurrentUser() admin: UserModel, @Args('data') data: CreateGroupInput): Promise<GroupPayload> {
    try {
      const group = await this.merchantService.createGroup(data);
      return { group };
    } catch (error) {
      console.log('Create group error: ', error);
      throw new Error(error);
    }
  }

  @Mutation(() => Group)
  @UseGuards(GqlAuthGuard)
  async updateGroup(
    @CurrentUser() admin: UserModel,
    @Args('id') id: number,
    @Args('data') data: PartialUpdateGroup,
  ): Promise<Group> {
    try {
      const result = await this.merchantService.updateGroup(id, data);
      return result;
    } catch (error) {
      console.log('Update group error: ', error);
      throw new Error(error);
    }
  }

  @Mutation(() => DeletePayload)
  @UseGuards(GqlAuthGuard)
  async deleteGroup(@CurrentUser() admin: UserModel, @Args('id') id: number): Promise<Count> {
    try {
      const result = await this.merchantService.deleteGroup(id);
      return result;
    } catch (error) {
      console.log('Delete group error: ', error);
      throw new Error(error);
    }
  }
}
