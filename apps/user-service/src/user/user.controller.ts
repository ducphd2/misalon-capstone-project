import { DeviceModel } from '@libs/database/entities';
import { CommonProto, UserProto } from '@libs/grpc-types';
import { CreateDeviceInput, Devices } from '@libs/grpc-types/protos/device';
import { GrpcLogInterceptor } from '@libs/interceptors';
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';

import { DeviceService } from '../device/device.service';

import { UserService } from './user.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller()
@UserProto.UserServiceControllerMethods()
export class UserController implements UserProto.UserServiceController {
  constructor(private readonly userService: UserService, private readonly deviceService: DeviceService) {}

  async updateCustomer(request: UserProto.AdminUpdateCustomerInput): Promise<UserProto.FindOneUser> {
    const updatedUser = await this.userService.update({ id: request.id, data: request.user });

    return {
      user: updatedUser,
    };
  }

  async addCustomer(request: UserProto.AddOperatorInput): Promise<UserProto.FindOneUser> {
    const user = await this.userService.create(request);

    return { user };
  }
  async countCustomer(request: CommonProto.QueryRequest): Promise<CommonProto.Count> {
    const count = await this.userService.countCustomer(request);
    return { count };
  }

  async addOperator(request: UserProto.AddOperatorInput): Promise<UserProto.FindOneUser> {
    const user = await this.userService.create(request);

    return { user };
  }

  async upsertDevice(request: CreateDeviceInput): Promise<DeviceModel> {
    return await this.deviceService.upsertDevice(request);
  }

  createDevice(request: CreateDeviceInput): Promise<DeviceModel> {
    throw new Error('Method not implemented.');
  }

  async findDevices(request: CommonProto.QueryRequest): Promise<Devices> {
    const devices = await this.deviceService.find(request);
    return devices;
  }

  async find(request: CommonProto.QueryRequest): Promise<UserProto.UserPagination> {
    const result = await this.userService.findWithPaging(request);
    return result;
  }

  async count(request: CommonProto.QueryRequest): Promise<CommonProto.Count> {
    const count = await this.userService.count(request);
    return { count };
  }

  async update(request: UserProto.UpdateUserInput): Promise<UserProto.FindOneUser> {
    const updatedUser = await this.userService.update(request);

    return { user: updatedUser };
  }

  deleteCustomer(request: CommonProto.Id): Promise<CommonProto.Count> {
    throw new Error('Method not implemented.');
  }

  async create(data: UserProto.CreateUserRequest): Promise<UserProto.FindOneUser> {
    const user = await this.userService.create(data);
    return { user };
  }

  async findById({ id }: CommonProto.Id): Promise<UserProto.FindOneUser> {
    const user = await this.userService.findById(id);
    return { user };
  }

  async findOne(request: CommonProto.QueryRequest): Promise<UserProto.FindOneUser> {
    const user = await this.userService.findOne(request);
    return { user };
  }
}
