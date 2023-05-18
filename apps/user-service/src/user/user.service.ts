import { UserModel } from '@libs/database/entities';
import { UserRepository } from '@libs/database/repositories';
import { CommonProto, MerchantProto, UserProto } from '@libs/grpc-types';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { isEmpty } from 'lodash';
import { forkJoin, map, of, switchMap } from 'rxjs';

import { DeviceService } from '../device/device.service';

@Injectable()
export class UserService implements OnModuleInit {
  private merchantService: MerchantProto.MerchantServiceClient;

  constructor(
    private readonly userRepository: UserRepository,
    private readonly deviceService: DeviceService,

    @Inject(MerchantProto.MERCHANT_PACKAGE_NAME) private merchantClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.merchantService = this.merchantClient.getService<MerchantProto.MerchantServiceClient>(
      MerchantProto.MERCHANT_SERVICE_NAME,
    );
  }

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
      },
    );

    const { items, meta } = result;

    const _merchantObservables = items.map((user) => {
      return this.merchantService.findBranchById({ id: user.branchId });
    });

    const _userWithBranch = forkJoin(_merchantObservables).pipe(
      map((merchantResponses) => {
        return items.map((booking, index) => {
          return {
            ...booking,
            branch: merchantResponses[index].branch,
          };
        });
      }),
    );

    // Combine the _userWithBranch observable with the meta information using switchMap
    return _userWithBranch.pipe(
      switchMap((userWithBranch) => {
        return of({
          items: userWithBranch,
          meta: meta,
        });
      }),
    );
  }
}
