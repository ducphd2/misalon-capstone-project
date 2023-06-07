import { BranchModel, BranchUserModel, MerchantModel, UserModel } from '@libs/database/entities';
import { BookingRepository, UserRepository } from '@libs/database/repositories';
import { BookingProto, CommonProto, UserProto } from '@libs/grpc-types';
import { EUserRole } from '@libs/grpc-types/protos/commons';
import { UserStatisticsByRange, UserStatisticsByRangeRequest } from '@libs/grpc-types/protos/user';
import { Injectable } from '@nestjs/common';
import { isEmpty, pick } from 'lodash';

import { DeviceService } from '../device/device.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly deviceService: DeviceService,
    private readonly bookingRepository: BookingRepository,
  ) {}

  async create(dto: UserProto.CreateUserRequest): Promise<UserModel> {
    const user = await this.userRepository.create(dto.user);
    await this.deviceService.create({ ...dto.device, userId: user.id });

    return user;
  }

  async findById(id: number): Promise<UserModel> {
    const result = await this.userRepository.findById(id, {
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
    const result = await this.userRepository.count({
      where: query.where ? JSON.parse(query.where) : null,
    });

    return result;
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
        include: [
          {
            model: MerchantModel,
            include: [BranchModel],
          },
        ],
      },
    );

    return result;
  }

  async getUserStatisticsByRange(request: UserStatisticsByRangeRequest): Promise<any> {
    const result = await this.userRepository.find({
      where: {
        role: EUserRole.USER,
      },
      attributes: ['id', 'age'],
      include: [
        {
          model: BranchUserModel,
          attributes: ['merchantId'],
          where: {
            merchantId: request.merchantId,
          },
        },
      ],
    });

    const userStatistics: UserStatisticsByRange = {
      range1: 0,
      range2: 0,
      range3: 0,
    };

    result.forEach((user) => {
      const age = user.age;

      if (age >= 16 && age <= 25) {
        userStatistics.range1 += 1;
      } else if (age >= 26 && age <= 40) {
        userStatistics.range2 += 1;
      } else if (age >= 41 && age <= 100) {
        userStatistics.range3 += 1;
      }
    });

    return userStatistics;
  }

  async getBookingStatisticByYear(request: CommonProto.QueryRequest): Promise<BookingProto.Bookings> {
    const result = await this.bookingRepository.find({
      where: JSON.parse(request.where),
      attributes: ['id', 'updatedAt'],
    });

    return { items: result as BookingProto.Booking[] };
  }

  async findCustomers(query: CommonProto.QueryRequest): Promise<any> {
    const baseWhere = !isEmpty(query.where) ? JSON.parse(query.where) : undefined;

    const searchQuery = pick(baseWhere, ['search']);
    const where = !isEmpty(searchQuery)
      ? {
          ...searchQuery,
          role: EUserRole.USER,
        }
      : { role: EUserRole.USER };

    const result = await this.userRepository.findAndPaginate(
      {
        where: where as unknown as string,
      },
      {
        include: [
          // {
          //   model: MerchantModel,
          //   attributes: ['id', 'name'],
          //   include: [
          //     {
          //       model: BranchModel,
          //       attributes: ['id', 'name'],
          //     },
          //   ],
          // },
          {
            model: BranchUserModel,
            attributes: ['id', 'branchId', 'merchantId'],
            where: {
              merchantId: baseWhere.merchantId,
            },
          },
        ],
        attributes: ['id', 'fullName', 'email', 'address', 'age', 'gender', 'contact', 'phoneNumber'],
      },
    );

    return result;
  }
}
