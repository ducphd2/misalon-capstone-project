import { DeviceEntity, UserEntity } from '@libs/database/entities';
import {
  CommonProto,
  FindOneUser,
  UserProto,
  UserServiceController,
  UserServiceControllerMethods,
} from '@libs/grpc-types';
import { CreateDeviceInput } from '@libs/grpc-types/protos/device';
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';
import { GrpcLogInterceptor } from 'interceptors/interceptors';

import { UserService } from './user.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}

  createDevice(request: CreateDeviceInput): Promise<DeviceEntity> {
    throw new Error('Method not implemented.');
  }

  find(request: CommonProto.QueryRequest): Promise<UserProto.FindUsersPayload> {
    throw new Error('Method not implemented.');
  }

  async count(request: CommonProto.QueryRequest): Promise<CommonProto.Count> {
    const count = await this.userService.count(request);
    return { count };
  }

  update(request: UserProto.UpdateUserInput): Promise<UserProto.FindOneUser> {
    throw new Error('Method not implemented.');
  }

  findOneCustomer(request: CommonProto.QueryRequest): Promise<UserProto.FindOneCustomerPayload> {
    throw new Error('Method not implemented.');
  }

  deleteCustomer(request: CommonProto.Id): Promise<CommonProto.Count> {
    throw new Error('Method not implemented.');
  }

  async create(data: UserProto.CreateUserRequest): Promise<FindOneUser> {
    const user: UserEntity = await this.userService.create(data);
    return { user };
  }

  async findById(request: CommonProto.Id): Promise<UserProto.FindOneUser> {
    const user: UserEntity = await this.userService.findById(request);
    return { user };
  }

  async findOne(request: CommonProto.QueryRequest): Promise<UserProto.FindOneUser> {
    const user: UserEntity = await this.userService.findOne(request);
    return { user };
  }
}
