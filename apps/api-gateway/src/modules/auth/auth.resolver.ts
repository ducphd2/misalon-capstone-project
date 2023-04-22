import { PasswordUtils } from '@libs/core';
import { EUserRole } from '@libs/grpc-types/protos/user';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { isEmpty } from 'lodash';

import { AuthService } from './auth.service';

import {
  BaseAuthInput,
  CreateMerchantInputDto,
  CreateUserInputDto,
  DeviceInputDto,
  InputLoginRequest,
} from '@/api-gateway/dtos';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import { ResponseAuthGrpc } from '@/api-gateway/types/auth';
import { User } from '@/api-gateway/types';

@Resolver(() => ResponseAuthGrpc)
export class AuthResolver {
  constructor(
    private readonly usersService: UserCommonService,
    private readonly merchantService: MerchantCommonService,
    private readonly authService: AuthService,

    private readonly passwordUtils: PasswordUtils,
  ) {}

  @Mutation(() => ResponseAuthGrpc)
  async login(@Context() context: any, @Args('data') data: BaseAuthInput): Promise<ResponseAuthGrpc> {
    try {
      const { res } = context;

      const { user } = await this.usersService.findOne({
        where: JSON.stringify({ email: data.email }),
      });

      if (isEmpty(user)) throw new Error('Could not login currently');

      const isSame: boolean = await this.passwordUtils.compare(data.password, user.password);

      if (!isSame) throw new Error('Unable to login');

      res.cookie('access-token', await this.authService.generateAccessToken(user), {
        httpOnly: true,
        maxAge: 1.8e6,
      });
      res.cookie('refresh-token', await this.authService.generateRefreshToken(user), {
        httpOnly: true,
        maxAge: 1.728e8,
      });

      return {
        user,
        accessToken: await this.authService.generateAccessToken(user),
        refreshToken: await this.authService.generateRefreshToken(user),
      };
    } catch (error) {
      console.log('Could not login', error);
      throw new HttpException('Could not login', HttpStatus.BAD_REQUEST);
    }
  }

  @Mutation(() => ResponseAuthGrpc)
  async customerLogin(@Context() context: any, @Args('data') data: InputLoginRequest): Promise<ResponseAuthGrpc> {
    try {
      const { res } = context;

      const { user } = await this.usersService.findOne({
        where: JSON.stringify({ email: data.email, role: EUserRole.USER }),
      });

      if (isEmpty(user)) throw new Error('Unable to login');

      const isSame: boolean = await this.passwordUtils.compare(data.password, user.password);

      if (!isSame) throw new Error('Unable to login');

      res.cookie('access-token', await this.authService.generateAccessToken(user), {
        httpOnly: true,
        maxAge: 1.8e6,
      });
      res.cookie('refresh-token', await this.authService.generateRefreshToken(user), {
        httpOnly: true,
        maxAge: 1.728e8,
      });

      return {
        user,
        accessToken: await this.authService.generateAccessToken(user),
        refreshToken: await this.authService.generateRefreshToken(user),
      };
    } catch (error) {
      console.log('error: ', error);
      throw new Error(error);
    }
  }

  @Mutation(() => ResponseAuthGrpc)
  async register(
    @Args('user') userInput: CreateUserInputDto,
    @Args('merchant', { nullable: true }) merchantInput: CreateMerchantInputDto,
    @Args('device', { nullable: true }) deviceInput?: DeviceInputDto,
  ) {
    try {
      const { count } = await this.usersService.countUser({
        where: JSON.stringify({ email: userInput.email }),
      });

      if (count >= 1) throw new Error('The email is taken');

      if (userInput.role === EUserRole.USER) {
        const { user } = await this.usersService.create({ user: userInput, device: deviceInput });

        return this.handleResponseAuthData(user);
      }
      const { user } = await this.usersService.create({ user: userInput, device: deviceInput });

      await this.merchantService.create({
        ...merchantInput,
        userId: user.id,
      });

      return this.handleResponseAuthData(user);
    } catch (error) {
      console.log('Register error, ', error);
      throw new Error(error);
    }
  }

  private async handleResponseAuthData(user: User) {
    return {
      user,
      accessToken: await this.authService.generateAccessToken(user),
      refreshToken: await this.authService.generateRefreshToken(user),
    };
  }

  @Mutation(() => Boolean)
  async logout(@Context() context: any): Promise<boolean> {
    const { res } = context;

    res.cookie('access-token', '', {
      httpOnly: true,
      maxAge: 0,
    });
    res.cookie('refresh-token', '', {
      httpOnly: true,
      maxAge: 0,
    });

    return true;
  }
}
