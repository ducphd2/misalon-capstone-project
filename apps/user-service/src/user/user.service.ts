import { UserModel } from '@libs/database/entities';
import { UserRepository } from '@libs/database/repositories';
import { CommonProto, UserProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import { FindOptions, Sequelize, WhereOptions } from 'sequelize';
import { isEmpty } from 'lodash';
import { query } from 'express';

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
    const result: UserModel = await this.userRepository.findById(id, {
      raw: true,
    });

    return result;
  }

  async findOne(dto: CommonProto.QueryRequest): Promise<UserModel> {
    const where = !isEmpty(dto.where) ? JSON.parse(dto.where) : undefined;

    const result: UserModel = await this.userRepository.findOne({
      ...dto,
      where,
      raw: true,
    });

    return result;
  }

  async count(query: CommonProto.QueryRequest): Promise<number> {
    return;
  }

  async update(request: UserProto.UpdateUserInput): Promise<UserModel> {
    const updatedUser = await this.userRepository.update(request.data, {
      where: {
        id: request.id,
      },
    });
    return updatedUser[0];
  }

  async countCustomer(request: CommonProto.QueryRequest): Promise<number> {
    return;
  }

  async findWithPaging(query: CommonProto.QueryRequest): Promise<any> {
    const baseWhere = !isEmpty(query.where) ? JSON.parse(query.where) : undefined;

    const result = await this.userRepository.findAndPaginate(
      {
        ...query,
        where: baseWhere,
      },
      {
        order: [[query.orderBy, query.orderDirection]],
      },
    );

    return result;
  }
}
