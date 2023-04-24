import { CUSTOMER_MESSAGE, ErrorHelper, MERCHANT_MESSAGE, PasswordUtils, USER_MESSAGE } from '@libs/core';
import { UserEntity } from '@libs/database/entities';
import { Count, EUserRole } from '@libs/grpc-types/protos/commons';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { isEmpty } from 'lodash';

import { CurrentUser } from '@/api-gateway/core/decorators';
import { GqlAuthGuard } from '@/api-gateway/core/guards';
import { AddCustomerDto, AddOperatorDto, ChangePasswordInput, UpdatePartialCustomer } from '@/api-gateway/dtos';
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
  async addOperator(@CurrentUser() admin: UserEntity, @Args('user') userInput: AddOperatorDto): Promise<UserPayload> {
    try {
      const { merchant } = await this.merchantService.findById({ id: userInput.merchantId });

      if (isEmpty(merchant)) {
        ErrorHelper.HttpNotFoundException(MERCHANT_MESSAGE.MERCHANT_NOT_FOUND);
      }

      const { count } = await this.userService.countUser({
        where: JSON.stringify({ email: userInput.email }),
      });

      if (count >= 1) {
        ErrorHelper.HttpBadRequestException(USER_MESSAGE.CREATE.EXIST_EMAIL);
      }

      const user = await this.userService.addOperator({
        user: userInput,
        merchantUser: {
          branchId: userInput?.branchId,
          merchantId: merchant.id,
          role: userInput?.role ?? EUserRole.MASTER_WORKER,
        },
      });

      return user;
    } catch (error) {
      console.log('Add operator error: ', error);
      throw new Error(error);
    }
  }

  @Mutation(() => UserPayload)
  @UseGuards(GqlAuthGuard)
  async addCustomer(
    @CurrentUser() admin: UserEntity,
    @Args('user') customerInput: AddCustomerDto,
  ): Promise<UserPayload> {
    try {
      const { merchant } = await this.merchantService.findById({ id: customerInput.merchantId });

      if (isEmpty(merchant)) {
        ErrorHelper.HttpNotFoundException(MERCHANT_MESSAGE.MERCHANT_NOT_FOUND);
      }

      const { count } = await this.userService.countCustomer({
        where: JSON.stringify({
          email: customerInput?.email,
          phoneNumber: customerInput?.phoneNumber,
          merchantId: customerInput?.merchantId,
        }),
      });

      if (count > 1) {
        ErrorHelper.HttpBadRequestException(USER_MESSAGE.CREATE.EXIST_EMAIL);
      }

      const user = await this.userService.addCustomer({
        user: {
          ...customerInput,
          role: EUserRole.USER,
          branchId: customerInput?.branchId,
          merchantId: merchant.id,
        },
        merchantUser: {
          branchId: customerInput?.branchId,
          merchantId: merchant.id,
          role: EUserRole.USER,
        },
      });

      return user;
    } catch (error) {
      console.log('Add customer error: ', error);
      throw new Error(error);
    }
  }

  @Mutation(() => UserPayload)
  @UseGuards(GqlAuthGuard)
  async updateCustomer(
    @CurrentUser() admin: UserEntity,
    @Args('id') userId: number,
    @Args('user') customerInput: UpdatePartialCustomer,
  ): Promise<UserPayload> {
    try {
      const currentCustomer = await this.userService.findById({ id: userId });

      if (isEmpty(currentCustomer.user)) {
        ErrorHelper.HttpBadRequestException(CUSTOMER_MESSAGE.READ.NOT_FOUND);
      }

      if (customerInput?.branchId) {
        const { branch } = await this.merchantService.findBranchById({ id: customerInput?.branchId });

        if (isEmpty(branch)) {
          ErrorHelper.HttpNotFoundException(MERCHANT_MESSAGE.MERCHANT_NOT_FOUND);
        }
      }

      const { count } = await this.userService.countCustomer({
        where: JSON.stringify({
          email: customerInput?.email,
          phoneNumber: customerInput?.phoneNumber,
          merchantId: customerInput?.merchantId,
        }),
      });

      if (count > 1) {
        ErrorHelper.HttpBadRequestException(USER_MESSAGE.CREATE.EXIST_EMAIL);
      }

      const user = await this.userService.updateCustomer({
        id: userId,
        user: {
          ...customerInput,
          role: customerInput?.role ?? EUserRole.MASTER_WORKER,
        },
        merchantUser: {
          ...customerInput,
          role: customerInput?.role ?? EUserRole.MASTER_WORKER,
        },
      });

      return user;
    } catch (error) {
      console.log('Add customer error: ', error);
      throw new Error(error);
    }
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => UserPayload)
  async updateUser(@Args('id') id: number, @Args('data') data: UpdatePartialUser): Promise<UserPayload> {
    const user = await this.userService.update(id, data);
    return user;
  }
}
