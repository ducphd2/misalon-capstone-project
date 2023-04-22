import { Injectable } from '@nestjs/common';
import { CommonProto, UserProto } from '@libs/grpc-types';
import { UserRepository } from '@libs/database/repositories';
import { UserEntity } from '@libs/database/entities';
import { isEmpty } from 'lodash';

import { DeviceService } from '../device/device.service';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository, private readonly deviceService: DeviceService) {}

  async create(dto: UserProto.CreateUserRequest): Promise<UserEntity> {
    const user = await this.userRepository.create(dto.user);
    if (!isEmpty(dto.device)) {
      await this.deviceService.create({ ...dto.device, userId: user.id });
    }
    return user;
  }

  async findById(dto: CommonProto.Id): Promise<UserEntity> {
    const user = await this.userRepository.findById(dto.id);
    return user;
  }

  async findOne(dto: CommonProto.QueryRequest): Promise<UserEntity> {
    const user = await this.userRepository.findOne(JSON.parse(dto.where));
    return user;
  }

  async count(query: CommonProto.QueryRequest): Promise<number> {
    const count = await this.userRepository.count(JSON.parse(query.where));
    return count;
  }
}
