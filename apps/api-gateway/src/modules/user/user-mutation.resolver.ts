import { PasswordUtils } from '@libs/core';
import { UserEntity } from '@libs/database/entities';
import { FindOneUser } from '@libs/grpc-types';
import { Count } from '@libs/grpc-types/protos/commons';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CurrentUser } from '@/api-gateway/core/decorators/user/current-user.decorator';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import { DeletePayload } from '@/api-gateway/types';
import { UpdatePartialUser, UserPayload } from '@/api-gateway/types/user';
import { CreateUserInputDto, DeviceInputDto } from '@/api-gateway/dtos';
import { ChangePasswordInput } from '@/api-gateway/dtos/user/user.dto';

@Resolver(() => UserPayload)
export class UserMutationResolver {
  constructor(private readonly userService: UserCommonService, private readonly passwordUtils: PasswordUtils) {}

  @Mutation(() => UserPayload)
  @UseGuards(GqlAuthGuard)
  async updatePassword(
    @CurrentUser() currentUser: UserEntity,
    @Args('data') data: ChangePasswordInput,
  ): Promise<UserPayload> {
    const { user } = await this.userService.findById({ id: currentUser.id });

    const isSame: boolean = await this.passwordUtils.compare(data.currentPassword, user.password);
    const isConfirmed: boolean = data.newPassword === data.confirmPassword;

    if (!isSame || !isConfirmed) {
      throw new HttpException('Error updating password. Kindly check your passwords', HttpStatus.BAD_REQUEST);
    }

    const password: string = await this.passwordUtils.hash(data.newPassword);

    const updatedUser: UserPayload = await this.userService.update(user.id, {
      password,
    });

    return updatedUser;
  }

  @Mutation(() => UserPayload)
  @UseGuards(GqlAuthGuard)
  async createCustomer(
    @Args('user') userInput: CreateUserInputDto,
    @Args('device', { type: () => DeviceInputDto, nullable: true }) deviceInput: DeviceInputDto,
  ): Promise<UserPayload> {
    try {
      const { count } = await this.userService.countUser({
        where: JSON.stringify({ email: userInput.email }),
      });

      if (count >= 1) throw new Error('The email is taken');

      const user = await this.userService.create({ user: userInput, device: deviceInput });

      return user;
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
