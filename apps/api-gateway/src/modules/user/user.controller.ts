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
import { hash } from 'argon2';
import { isEmpty, merge } from 'lodash';

import { User } from '@/api-gateway/core';
import { JwtAuthGuard } from '@/api-gateway/core/guards/auth.guard';
import {
  AddCustomerDto,
  ChangePasswordInput,
  PaginateUserDto,
  UpdatePartialCustomer,
  UpdateUserDto,
} from '@/api-gateway/dtos';
import { BookingCommonService } from '@/api-gateway/modules/booking-common/booking-common.service';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserCommonService,
    private readonly passwordUtils: PasswordUtils,
    private readonly merchantService: MerchantCommonService,
    private readonly bookingService: BookingCommonService,
  ) {}

  @Post('change-password')
  @UseGuards(JwtAuthGuard)
  async updatePassword(@User() currentUser: UserModel, @Body() data: ChangePasswordInput) {
    const { user } = await this.userService.findById({ id: currentUser.id });

    const isSame: boolean = await this.passwordUtils.compare(data.currentPassword, user.password);
    const isConfirmed: boolean = data.newPassword === data.confirmPassword;

    if (!isSame || !isConfirmed) {
      ErrorHelper.HttpBadRequestException(USER_MESSAGE.UPDATE.INVALID_PASSWORD);
    }

    const result = await this.userService.update(user.id, {
      password: await hash(data.newPassword),
    });

    return result;
  }

  @Post('add-customer')
  @UseGuards(JwtAuthGuard)
  async addCustomer(@User() admin: UserModel, @Body() customerInput: AddCustomerDto) {
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
  ) {
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
    });

    return user;
  }

  @Get('merchant/:id')
  @UseGuards(JwtAuthGuard)
  async getOperators(@Param('id') merchantId: number, @Query() query: PaginateUserDto) {
    const where = {
      merchantId,
      role: {
        _not: EUserRole.USER,
      },
    };

    if (!isEmpty(query?.q)) {
      merge(where, {
        _or: [{ search: { _iLike: `%${query.q}%` } }],
      });
    }

    const result = await this.userService.find({
      ...query,
      where: JSON.stringify(where),
    });

    return result;
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findOwnBookings(@User() user: UserModel, @Query() query: PaginateUserDto) {
    const where = {
      userId: user.id,
    };

    if (!isEmpty(query?.q)) {
      merge(where, {
        search: {
          _iLike: `%${query.q}%`,
        },
      });
    }

    const result = await this.bookingService.findAndPaginate({
      ...query,
      where: JSON.stringify(where),
    });

    return result;
  }

  @Get(':id/bookings')
  @UseGuards(JwtAuthGuard)
  async findBookings(@Param('id') userId: number, @Query() query: PaginateUserDto) {
    const where = {
      userId,
    };

    if (!isEmpty(query?.q)) {
      merge(where, {
        search: {
          _iLike: `%${query.q}%`,
        },
      });
    }

    const result = await this.bookingService.findAndPaginate({
      ...query,
      where: JSON.stringify(where),
    });

    return result;
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async updateUser(@User() user: UserModel, @Body() input: UpdateUserDto) {
    const updatedUser = await this.userService.updateCustomer({
      id: user.id,
      user: input,
    });

    return {
      message: 'Cập nhật thông tin người dùng thành công',
      user: updatedUser,
    };
  }
}
