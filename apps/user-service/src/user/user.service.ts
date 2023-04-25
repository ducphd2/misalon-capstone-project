import { UserModel } from '@libs/database/entities';
import { UserRepository } from '@libs/database/repositories';
import { CommonProto, UserProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';

import { DeviceService } from '../device/device.service';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository, private readonly deviceService: DeviceService) {}

  async create(dto: UserProto.CreateUserRequest): Promise<UserModel> {
    const user = await this.userRepository.create(dto.user);
    const device = await this.deviceService.create({ ...dto.device, userId: user.id });

    return user;
  }

  async findById(id: number): Promise<UserModel> {
    return;
  }

  async findOne(dto: CommonProto.QueryRequest): Promise<UserModel> {
    return;
  }

  async count(query: CommonProto.QueryRequest): Promise<number> {
    return;
  }

  async update(request: UserProto.UpdateUserInput): Promise<UserModel> {
    return;
  }

  async countCustomer(request: CommonProto.QueryRequest): Promise<number> {
    return;
  }

  async findWithPaging(request: CommonProto.QueryRequest): Promise<any> {
    return;
  }
}
