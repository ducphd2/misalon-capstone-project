import { AUTH_MESSAGE, EBullEvent, ErrorHelper, PasswordUtils, USER_MESSAGE } from '@libs/core';
import { BranchProto, MerchantProto, UserProto } from '@libs/grpc-types';
import { EUserRole } from '@libs/grpc-types/protos/commons';
import { BullQueueProvider } from '@libs/modules';
import { Body, Controller, Post } from '@nestjs/common';
import { isEmpty } from 'lodash';

import { CustomerRegisterPayload, InputLoginRequest, RegisterPayload } from '../../dtos';

import { AuthService } from './auth.service';

import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UserCommonService,
    private readonly merchantService: MerchantCommonService,
    private readonly authService: AuthService,

    private readonly passwordUtils: PasswordUtils,
    private readonly bullQueue: BullQueueProvider,
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

    if (data?.device) {
      await this.usersService.upsertDevice({ ...data?.device, userId: user.id });
    }

    const re = await this.handleResponseAuthData(user);
    return {
      ...re,
      merchant,
    };
  }

  @Post('register')
  async register(@Body() data: RegisterPayload) {
    const { count } = await this.usersService.countUser({
      where: JSON.stringify({ email: data.email }),
    });

    let countSubdomain = null;
    countSubdomain = await this.merchantService.findOne({
      where: JSON.stringify({ subdomain: data.subdomain }),
    });

    if (count >= 1) {
      ErrorHelper.HttpBadRequestException('The email is taken');
    }
    if (!isEmpty(countSubdomain.merchant)) {
      ErrorHelper.HttpBadRequestException('The subdomain is taken');
    }

    const { user } = await this.usersService.create({
      user: {
        email: data.email,
        password: data.password,
        fullName: data?.fullName,
        gender: data?.gender,
        avatar: data?.avatar,
        role: EUserRole.ADMIN,
        subdomain: data?.subdomain,
      },
    });

    const { merchant, branch } = await this.merchantService.create({
      address: data.merchantAddress,
      phone: data.merchantPhoneNumber,
      subdomain: data.subdomain,
      name: data.merchantName,
      userId: user.id,
    });

    await this.bullQueue.addUserEvent(EBullEvent.UPDATE_ADMIN_REGISTER, {
      userId: user.id,
      merchantId: merchant.id,
      branchId: branch.id,
    });

    return this.handleResponseAuthData(user);
  }

  @Post('customer-register')
  async customerRegister(@Body() { user: userInput, device }: CustomerRegisterPayload) {
    const { count } = await this.usersService.countUser({
      where: JSON.stringify({ email: userInput.email }),
    });

    if (count >= 1) {
      ErrorHelper.HttpBadRequestException('The email is taken');
    }

    const { user } = await this.usersService.create({
      user: {
        ...userInput,
        role: EUserRole.USER,
      },
      device,
    });

    return this.handleResponseAuthData(user);
  }

  private async handleResponseAuthData(
    user: UserProto.User,
    merchant?: MerchantProto.Merchant,
    branch?: BranchProto.Branch,
  ) {
    return {
      user,
      merchant,
      branches: branch ? [branch] : undefined,
      accessToken: await this.authService.generateAccessToken(user),
      refreshToken: await this.authService.generateRefreshToken(user),
    };
  }

  @Post('logout')
  async logout(): Promise<boolean> {
    return true;
  }
}
