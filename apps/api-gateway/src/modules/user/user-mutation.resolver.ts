import { ErrorHelper, PasswordUtils, USER_MESSAGE } from '@libs/core';
import { UserEntity } from '@libs/database/entities';
import { Count } from '@libs/grpc-types/protos/commons';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CurrentUser } from '@/api-gateway/core/decorators';
import { GqlAuthGuard } from '@/api-gateway/core/guards';
import { ChangePasswordInput, CreateUserInputDto } from '@/api-gateway/dtos';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import { DeletePayload, UpdatePartialUser, User, UserPayload } from '@/api-gateway/types';

@Resolver(() => UserPayload)
export class UserMutationResolver {
  constructor(
    private readonly userService: UserCommonService,
    private readonly passwordUtils: PasswordUtils,
    private readonly merchantService: MerchantCommonService,
  ) {}

  @Mutation(() => UserPayload)
  @UseGuards(GqlAuthGuard)
  async updatePassword(
    @CurrentUser() currentUser: User,
    @Args('data') data: ChangePasswordInput,
  ): Promise<UserPayload> {
    const { user } = await this.userService.findById({ id: currentUser.id });

    const isSame: boolean = await this.passwordUtils.compare(data.currentPassword, user.password);
    const isConfirmed: boolean = data.newPassword === data.confirmPassword;

    if (!isSame || !isConfirmed) {
      ErrorHelper.HttpBadRequestException(USER_MESSAGE.UPDATE.INVALID_PASSWORD);
    }

    const password: string = await this.passwordUtils.hash(data.newPassword);

    const result = await this.userService.update(user.id, {
      password,
    });

    return result;
  }

  @Mutation(() => UserPayload)
  @UseGuards(GqlAuthGuard)
  async addOperator(
    @CurrentUser() admin: UserEntity,
    @Args('user') userInput: CreateUserInputDto,
  ): Promise<UserPayload> {
    try {
      const { merchant } = await this.merchantService.findOne({
        where: JSON.stringify({ userId: admin.id }),
      });

      const { count } = await this.userService.countUser({
        where: JSON.stringify({ email: userInput.email }),
      });

      if (count >= 1) {
        ErrorHelper.HttpBadRequestException(USER_MESSAGE.CREATE.EXIST_EMAIL);
      }

      // const user = await this.userService.create({ user: userInput, device: deviceInput });

      // return user;

      return;
    } catch (error) {
      console.log('createCustomer error: ', error);
      throw new Error(error);
    }
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => UserPayload)
  async updateUser(@Args('id') id: number, @Args('data') data: UpdatePartialUser): Promise<UserPayload> {
    const user = await this.userService.update(id, data);
    return user;
  }

  @Mutation(() => DeletePayload)
  @UseGuards(GqlAuthGuard)
  async deleteCustomer(@Args('id') id: number): Promise<Count> {
    return await this.userService.deleteCustomer(id);
  }
}
