import { DeviceEntity, UserEntity } from '@libs/database/entities';
import {
  CommonProto,
  FindOneUser,
  UserProto,
  UserServiceController,
  UserServiceControllerMethods,
} from '@libs/grpc-types';
import { CreateDeviceInput, Device, Devices } from '@libs/grpc-types/protos/device';
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';
import { GrpcLogInterceptor } from 'interceptors/interceptors';
import { Observable } from 'rxjs';

import { DeviceService } from '../device/device.service';

import { UserService } from './user.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService, private readonly deviceService: DeviceService) {}

  async upsertDevice(request: CreateDeviceInput): Promise<Device> {
    return await this.deviceService.upsertDevice(request);
  }

  createDevice(request: CreateDeviceInput): Promise<DeviceEntity> {
    throw new Error('Method not implemented.');
  }

  async findDevices(request: CommonProto.QueryRequest): Promise<Devices> {
    const devices = await this.deviceService.find(request);
    return devices;
  }

  find(request: CommonProto.QueryRequest): Promise<UserProto.FindUsersPayload> {
    throw new Error('Method not implemented.');
  }

  async count(request: CommonProto.QueryRequest): Promise<CommonProto.Count> {
    const count = await this.userService.count(request);
    return { count };
  }

  async update(request: UserProto.UpdateUserInput): Promise<UserProto.FindOneUser> {
    const updatedUser = await this.userService.update(request);

    return { user: updatedUser };
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

  async findById({ id }: CommonProto.Id): Promise<UserProto.FindOneUser> {
    const user: UserEntity = await this.userService.findById(id);
    return { user };
  }

  async findOne(request: CommonProto.QueryRequest): Promise<UserProto.FindOneUser> {
    const user: UserEntity = await this.userService.findOne(request);
    return { user };
  }
}
