import { Injectable } from '@nestjs/common';
import { CommonProto, UserProto } from '@libs/grpc-types';
import { UserRepository } from '@libs/database/repositories';
import { MerchantUserEntity, UserEntity } from '@libs/database/entities';
import { isEmpty } from 'lodash';
import { ErrorHelper, LIMIT, PAGE } from '@libs/core';
import { USER_MESSAGE } from '@libs/core/message';
import { IPaginationMeta, Pagination } from 'nestjs-typeorm-paginate';

import { DeviceService } from '../device/device.service';

import { EUserRole } from '@/api-gateway/dtos';

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

  async findById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findById(id);
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

  async update(request: UserProto.UpdateUserInput): Promise<UserEntity> {
    const currentUser = await this.findById(request.id);

    if (isEmpty(currentUser)) {
      ErrorHelper.NotFoundException(USER_MESSAGE.USER_NOT_FOUND);
    }

    return await this.userRepository.updateUser(request.id, request.data);
  }

  async countCustomer(request: CommonProto.QueryRequest): Promise<number> {
    const where = JSON.parse(request.where);
    const queryBuilder = this.userRepository
      .getModel()
      .createQueryBuilder('user')
      .leftJoinAndMapOne('room.merchant_user', MerchantUserEntity, 'merchant_user')
      .where('user.id = merchant_user.user_id')
      .andWhere('user.role = :role', { role: EUserRole.USER })
      .andWhere('merchant_user.merchant_id = :merchantId', { merchantId: where?.merchantId });

    if (where?.email) {
      queryBuilder.andWhere('user.email = :email', { email: where.email });
    }

    if (where?.phoneNumber) {
      queryBuilder.andWhere('user.phoneNumber = :phoneNumber', { phoneNumber: where.phoneNumber });
    }

    const [customers, count] = await queryBuilder.getManyAndCount();

    return count;
  }

  async findWithPaging(request: CommonProto.QueryRequest): Promise<Pagination<UserEntity, IPaginationMeta>> {
    const userInput = 'John';
    const searchQuery = `plainto_tsquery('english', '${userInput}')`;

    const a = this.userRepository.getModel().createQueryBuilder();

    const result = await this.userRepository.findWithPaging(
      {
        page: request?.page ?? PAGE,
        limit: request.limit ?? LIMIT,
      },
      {
        where: JSON.parse(request.where) ?? undefined,
      },
    );
    return result;
  }
}
