import { PasswordUtils } from '@libs/core';
import { UserEntity } from '@libs/database/entities';
import { Count } from '@libs/grpc-types/protos/commons';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CurrentUser } from '@/api-gateway/core/decorators/current-user.decorator';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import { ChangePasswordInput } from '@/api-gateway/modules/user/dto';
import { DeletePayload } from '@/api-gateway/types';
import { CreateUserInputDto, UpdatePartialUser, User } from '@/api-gateway/types/user';

@Resolver()
export class UserMutationResolver {
  constructor(private readonly userService: UserCommonService, private readonly passwordUtils: PasswordUtils) {}

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async updatePassword(@CurrentUser() currentUser: UserEntity, @Args('data') data: ChangePasswordInput) {
    const { user } = await this.userService.findById({ id: currentUser.id });

    const isSame: boolean = await this.passwordUtils.compare(data.currentPassword, user.password);
    const isConfirmed: boolean = data.newPassword === data.confirmPassword;

    if (!isSame || !isConfirmed) {
      throw new HttpException('Error updating password. Kindly check your passwords', HttpStatus.BAD_REQUEST);
    }

    const password: string = await this.passwordUtils.hash(data.newPassword);

    const updatedUser: User = await this.userService.update(user.id, {
      password,
    });

    return updatedUser;
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async createCustomer(@Args('data') userInput: CreateUserInputDto): Promise<User> {
    try {
      const { count } = await this.userService.countUser({
        where: JSON.stringify({ email: userInput.email }),
      });

      if (count >= 1) throw new Error('The email is taken');

      const user = await this.userService.create(userInput);

      return user;
    } catch (error) {
      console.log('createCustomer error: ', error);
      throw new Error(error);
    }
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async updateUser(@Args('id') id: number, @Args('data') data: UpdatePartialUser): Promise<User> {
    const user = await this.userService.update(id, data);
    return user;
  }

  @Mutation(() => DeletePayload)
  @UseGuards(GqlAuthGuard)
  async deleteCustomer(@Args('id') id: number): Promise<Count> {
    return await this.userService.deleteCustomer(id);
  }
}
