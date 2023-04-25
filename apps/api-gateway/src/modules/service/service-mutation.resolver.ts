import { QueryUtils } from '@libs/core';
import { UserModel } from '@libs/database/entities';
import { Count } from '@libs/grpc-types/protos/commons';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CurrentUser } from '@/api-gateway/core/decorators/user/current-user.decorator';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { CreateServiceInput, PartialUpdateService } from '@/api-gateway/dtos';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { DeletePayload, ServicePayload } from '@/api-gateway/types';

@Resolver()
export class ServiceMutationResolver {
  constructor(private readonly merchantService: MerchantCommonService, private readonly queryUtils: QueryUtils) {}

  @Mutation(() => ServicePayload)
  @UseGuards(GqlAuthGuard)
  async createService(
    @CurrentUser() admin: UserModel,
    @Args('data') data: CreateServiceInput,
  ): Promise<ServicePayload> {
    try {
      const service = await this.merchantService.createService(data);
      return { service };
    } catch (error) {
      console.log('Create service error: ', error);
      throw new Error(error);
    }
  }

  @Mutation(() => ServicePayload)
  @UseGuards(GqlAuthGuard)
  async updateService(
    @CurrentUser() admin: UserModel,
    @Args('id') id: number,
    @Args('data') data: PartialUpdateService,
  ): Promise<ServicePayload> {
    try {
      const updatedService = await this.merchantService.updateService(id, data);
      return { service: updatedService };
    } catch (error) {
      console.log('Update service error: ', error);
      throw new Error(error);
    }
  }

  @Mutation(() => DeletePayload)
  @UseGuards(GqlAuthGuard)
  async deleteService(@CurrentUser() admin: UserModel, @Args('id') id: number): Promise<Count> {
    try {
      const result = await this.merchantService.deleteService(id);
      return result;
    } catch (error) {
      console.log('Delete service error: ', error);
      throw new Error(error);
    }
  }
}
