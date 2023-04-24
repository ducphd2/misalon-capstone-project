import { PasswordUtils } from '@libs/core';
import { EUserRole, EUserStatus } from '@libs/grpc-types/protos/commons';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { isEmpty } from 'lodash';

import { AuthService } from './auth.service';

import { CreateMerchantInputDto, CreateUserInputDto, DeviceInputDto, InputLoginRequest } from '@/api-gateway/dtos';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import { User } from '@/api-gateway/types';
import { ResponseAuthGrpc } from '@/api-gateway/types/auth';

@Resolver(() => ResponseAuthGrpc)
export class AuthResolver {
  constructor(
    private readonly usersService: UserCommonService,
    private readonly merchantService: MerchantCommonService,
    private readonly authService: AuthService,

    private readonly passwordUtils: PasswordUtils,
  ) {}

  @Mutation(() => ResponseAuthGrpc)
  async login(@Args('data') data: InputLoginRequest): Promise<ResponseAuthGrpc> {
    try {
      const { user } = await this.usersService.findOne({
        where: JSON.stringify({ email: data.email }),
      });

      if (isEmpty(user)) throw new Error('Could not login currently');

      const isSame: boolean = await this.passwordUtils.compare(data.password, user.password);

      if (!isSame) throw new Error('Invalid credentials');

      if (data?.device) {
        await this.usersService.upsertDevice({ ...data?.device, userId: user.id });
      }

      return this.handleResponseAuthData(user);
    } catch (error) {
      console.log('Could not login', error);
      throw error;
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

      const { merchant, branch } = await this.merchantService.create({
        ...merchantInput,
        userId: user.id,
      });

      const merchantUser = await this.usersService.createMerchantUser({
        role: userInput.role ?? EUserRole.ADMIN,
        branchId: branch.id,
        merchantId: merchant.id,
        status: userInput.status ?? EUserStatus.ACTIVE,
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
