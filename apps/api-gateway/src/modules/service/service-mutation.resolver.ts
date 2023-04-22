import { QueryUtils } from '@libs/core';
import { UserEntity } from '@libs/database/entities';
import { Count } from '@libs/grpc-types/protos/commons';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CurrentUser } from '@/api-gateway/core/decorators/user/current-user.decorator';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { CreateGroupInput, DeletePayload, PartialUpdateService, Service } from '@/api-gateway/types';

@Resolver(() => Service)
export class ServiceMutationResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Mutation(() => Service)
  @UseGuards(GqlAuthGuard)
  async createService(@CurrentUser() admin: UserEntity, @Args('data') data: CreateGroupInput): Promise<Service> {
    try {
      const result = await this.merchantService.createGroup(data);
      return result;
    } catch (error) {
      console.log('Create service error: ', error);
      throw new Error(error);
    }
  }

  @Mutation(() => Service)
  @UseGuards(GqlAuthGuard)
  async updateService(
    @CurrentUser() admin: UserEntity,
    @Args('id') id: number,
    @Args('data') data: PartialUpdateService,
  ): Promise<Service> {
    try {
      const result = await this.merchantService.updateService(id, data);
      return result;
    } catch (error) {
      console.log('Update service error: ', error);
      throw new Error(error);
    }
  }

  @Mutation(() => DeletePayload)
  @UseGuards(GqlAuthGuard)
  async deleteService(@CurrentUser() admin: UserEntity, @Args('id') id: number): Promise<Count> {
    try {
      const result = await this.merchantService.deleteService(id);
      return result;
    } catch (error) {
      console.log('Delete service error: ', error);
      throw new Error(error);
    }
  }
}
