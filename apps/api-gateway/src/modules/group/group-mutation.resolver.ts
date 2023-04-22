import { QueryUtils } from '@libs/core';
import { UserEntity } from '@libs/database/entities';
import { Count } from '@libs/grpc-types/protos/commons';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CurrentUser } from '@/api-gateway/core/decorators/user/current-user.decorator';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { CreateGroupInput, DeletePayload, Group, PartialUpdateGroup } from '@/api-gateway/types';

@Resolver(() => Group)
export class GroupMutationResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Mutation(() => Group)
  @UseGuards(GqlAuthGuard)
  async createGroup(@CurrentUser() admin: UserEntity, @Args('data') data: CreateGroupInput): Promise<Group> {
    try {
      const result = await this.merchantService.createGroup(data);
      return result;
    } catch (error) {
      console.log('Create group error: ', error);
      throw new Error(error);
    }
  }

  @Mutation(() => Group)
  @UseGuards(GqlAuthGuard)
  async updateGroup(
    @CurrentUser() admin: UserEntity,
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
  async deleteGroup(@CurrentUser() admin: UserEntity, @Args('id') id: number): Promise<Count> {
    try {
      const result = await this.merchantService.deleteGroup(id);
      return result;
    } catch (error) {
      console.log('Delete group error: ', error);
      throw new Error(error);
    }
  }
}
