import {
  COMMON_MESSAGE,
  CUSTOMER_MESSAGE,
  ErrorHelper,
  MERCHANT_MESSAGE,
  PasswordUtils,
  USER_MESSAGE,
} from '@libs/core';
import { UserModel } from '@libs/database/entities';
import { EUserRole } from '@libs/grpc-types/protos/commons';
import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { Args, Mutation } from '@nestjs/graphql';
import { isEmpty, merge } from 'lodash';
import { Sequelize } from 'sequelize';

import { User } from '@/api-gateway/core';
import { GqlAuthGuard } from '@/api-gateway/core/guards';
import { JwtAuthGuard } from '@/api-gateway/core/guards/auth.guard';
import {
  AddCustomerDto,
  AddOperatorDto,
  ChangePasswordInput,
  PaginateUserDto,
  UpdatePartialCustomer,
} from '@/api-gateway/dtos';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import { UpdatePartialUser, UserPaging, UserPayload } from '@/api-gateway/types';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserCommonService,
    private readonly passwordUtils: PasswordUtils,
    private readonly merchantService: MerchantCommonService,
  ) {}

  @Post('change-password')
  @UseGuards(JwtAuthGuard)
  async updatePassword(@User() currentUser: UserModel, @Body() data: ChangePasswordInput): Promise<UserPayload> {
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

  @Post('add-operator')
  @UseGuards(JwtAuthGuard)
  async addOperator(@User() admin: UserModel, @Body() userInput: AddOperatorDto): Promise<UserPayload> {
    const { merchant } = await this.merchantService.findById({ id: userInput.merchantId });

    if (isEmpty(merchant)) {
      ErrorHelper.HttpNotFoundException(MERCHANT_MESSAGE.READ.NOT_FOUND);
    }

    if (merchant.userId !== admin.id) {
      ErrorHelper.HttpBadRequestException(COMMON_MESSAGE.INVALID);
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
  }

  @Post('add-customer')
  @UseGuards(JwtAuthGuard)
  async addCustomer(@User() admin: UserModel, @Body() customerInput: AddCustomerDto): Promise<any> {
    const { merchant } = await this.merchantService.findById({ id: customerInput.merchantId });

    if (isEmpty(merchant)) {
      ErrorHelper.HttpNotFoundException(MERCHANT_MESSAGE.READ.NOT_FOUND);
    }

    if (merchant.userId !== admin.id) {
      ErrorHelper.HttpBadRequestException(COMMON_MESSAGE.INVALID);
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

    const { user } = await this.userService.addCustomer({
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

    return {
      message: CUSTOMER_MESSAGE.CREATE.SUCCESSFUL,
      user,
    };
  }

  @Patch('update-customer/:id')
  @UseGuards(JwtAuthGuard)
  async updateCustomer(
    @User() admin: UserModel,
    @Param('id') userId: number,
    @Body() customerInput: UpdatePartialCustomer,
  ): Promise<UserPayload> {
    const currentCustomer = await this.userService.findById({ id: userId });

    if (isEmpty(currentCustomer.user)) {
      ErrorHelper.HttpBadRequestException(CUSTOMER_MESSAGE.READ.NOT_FOUND);
    }

    if (customerInput?.branchId) {
      const { branch } = await this.merchantService.findBranchById({ id: customerInput?.branchId });

      if (isEmpty(branch)) {
        ErrorHelper.HttpNotFoundException(MERCHANT_MESSAGE.READ.NOT_FOUND);
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
  }

  @Post('add-user')
  @UseGuards(JwtAuthGuard)
  async updateUser(@Args('id') id: number, @Args('data') data: UpdatePartialUser): Promise<UserPayload> {
    const user = await this.userService.update(id, data);
    return user;
  }

  @Get('merchant/:id')
  @UseGuards(JwtAuthGuard)
  async getOperators(@Param('id') merchantId: number, @Query() query: PaginateUserDto): Promise<any> {
    const where = {
      merchantId,
      role: {
        _not: EUserRole.USER,
      },
    };

    if (!isEmpty(query?.q)) {
      merge(where, {
        _or: [{ fuzzySearch: { _iLike: `%${query.q}%` } }],
      });
    }

    const result = await this.userService.find({
      where: JSON.stringify(where),
      searchKey: query?.q,
      page: query?.page,
      limit: query?.limit,
      orderBy: query?.orderBy,
      orderDirection: 'DESC',
    });

    return result;
  }
}
