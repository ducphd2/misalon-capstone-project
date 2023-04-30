import { AUTH_MESSAGE, ErrorHelper, PasswordUtils, USER_MESSAGE } from '@libs/core';
import { EUserRole, EUserStatus } from '@libs/grpc-types/protos/commons';
import { Body, Controller, Post } from '@nestjs/common';
import { isEmpty } from 'lodash';

import { InputLoginRequest, RegisterPayload } from '../../dtos';

import { AuthService } from './auth.service';

import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import { Branch, Merchant, User } from '@/api-gateway/types';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UserCommonService,
    private readonly merchantService: MerchantCommonService,
    private readonly authService: AuthService,

    private readonly passwordUtils: PasswordUtils,
  ) {}

  @Post('login')
  async login(@Body() data: InputLoginRequest): Promise<any> {
    const { user } = await this.usersService.findOne({
      where: JSON.stringify({ email: data.email }),
    });

    if (isEmpty(user)) {
      ErrorHelper.HttpNotFoundException(USER_MESSAGE.READ.NOT_FOUND);
    }

    const isSame: boolean = await this.passwordUtils.compare(data.password, user.password);

    if (!isSame) {
      ErrorHelper.HttpBadRequestException(AUTH_MESSAGE.LOGIN.INVALID);
    }

    if (user.role === EUserRole.USER) {
      return this.handleResponseAuthData(user);
    }

    const { merchant } = await this.merchantService.findOne({
      where: JSON.stringify({ userId: user.id }),
    });

    const { branches } = await this.merchantService.branches({
      where: JSON.stringify({ merchantId: merchant.id }),
    });

    if (data?.device) {
      await this.usersService.upsertDevice({ ...data?.device, userId: user.id });
    }

    const re = await this.handleResponseAuthData(user);
    return {
      ...re,
      merchant,
      branches,
    };
  }

  @Post('register')
  async register(@Body() { user: userInput, merchant: merchantInput, device: deviceInput }: RegisterPayload) {
    const { count } = await this.usersService.countUser({
      where: JSON.stringify({ email: userInput.email }),
    });

    if (count >= 1) throw new Error('The email is taken');

    if (userInput.role === EUserRole.USER) {
      const { user } = await this.usersService.create({ user: userInput, device: deviceInput });

      return this.handleResponseAuthData(user);
    }
    const { user } = await this.usersService.create({ user: userInput, device: deviceInput });

    const { merchant, branch } = await this.merchantService.create({
      ...merchantInput,
      userId: user.id,
    });

    await this.usersService.createMerchantUser({
      role: userInput.role ?? EUserRole.ADMIN,
      branchId: branch.id,
      merchantId: merchant.id,
      status: userInput.status ?? EUserStatus.ACTIVE,
      userId: user.id,
    });

    return this.handleResponseAuthData(user, merchant, branch);
  }

  private async handleResponseAuthData(user: User, merchant?: Merchant, branch?: Branch) {
    return {
      user,
      merchant,
      branches: branch ? [branch] : null,
      accessToken: await this.authService.generateAccessToken(user),
      refreshToken: await this.authService.generateRefreshToken(user),
    };
  }

  @Post('logout')
  async logout(): Promise<boolean> {
    return true;
  }
}
