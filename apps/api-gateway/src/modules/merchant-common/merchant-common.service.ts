import {
  BranchPagination,
  Branches,
  CreateBranchInput,
  NullableBranch,
  UpdateBranchData,
} from '@libs/grpc-types/protos/branch';
import { Count, Id, QueryRequest } from '@libs/grpc-types/protos/commons';
import { GroupPagination, NullableGroup, UpdateGroupData } from '@libs/grpc-types/protos/group';
import {
  CreateInput,
  MERCHANT_PACKAGE_NAME,
  MERCHANT_SERVICE_NAME,
  MerchantPagination,
  MerchantServiceClient,
  NullableMerchant,
} from '@libs/grpc-types/protos/merchant';
import { NullableService, ServicePagination, UpdateServiceData } from '@libs/grpc-types/protos/service';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { isEmpty, merge } from 'lodash';
import { firstValueFrom } from 'rxjs';

import { BaseQueryDto, CreateGroupInput } from '@/api-gateway/dtos';
import { Branch, CreateServiceInput, Group, Merchant, Service } from '@/api-gateway/types';

@Injectable()
export class MerchantCommonService implements OnModuleInit {
  private merchantService: MerchantServiceClient;

  constructor(@Inject(MERCHANT_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.merchantService = this.client.getService<MerchantServiceClient>(MERCHANT_SERVICE_NAME);
  }

  async create(data: CreateInput): Promise<{ merchant: Merchant; branch?: Branch }> {
    return await firstValueFrom(this.merchantService.create(data));
  }

  async findById(id: Id): Promise<NullableMerchant> {
    return await firstValueFrom(this.merchantService.findById(id));
  }

  async findOne(request: QueryRequest): Promise<NullableMerchant> {
    return await firstValueFrom(this.merchantService.findOne(request));
  }

  async find(query: QueryRequest): Promise<MerchantPagination> {
    return await firstValueFrom(this.merchantService.find(query));
  }

  async findBranchById(id: Id): Promise<NullableBranch> {
    return await firstValueFrom(this.merchantService.findBranchById(id));
  }

  async branch(query: QueryRequest): Promise<NullableBranch> {
    return await firstValueFrom(this.merchantService.branch(query));
  }

  async findBranches(query: QueryRequest): Promise<BranchPagination> {
    return await firstValueFrom(this.merchantService.findBranches(query));
  }

  async branches(query: QueryRequest): Promise<Branches> {
    return await firstValueFrom(this.merchantService.branches(query));
  }

  async createBranch(data: CreateBranchInput): Promise<Branch> {
    return await firstValueFrom(this.merchantService.createBranch(data));
  }

  async updateBranch(id: number, data: UpdateBranchData): Promise<Branch> {
    return await firstValueFrom(this.merchantService.updateBranch({ id, data }));
  }

  async deleteBranch(id: number): Promise<Count> {
    return await firstValueFrom(this.merchantService.deleteBranch({ id }));
  }

  async findGroupById(id: Id): Promise<NullableGroup> {
    return await firstValueFrom(this.merchantService.findGroupById(id));
  }

  async group(query: QueryRequest): Promise<NullableGroup> {
    return await firstValueFrom(this.merchantService.group(query));
  }

  async findGroups(query: QueryRequest): Promise<GroupPagination> {
    return await firstValueFrom(this.merchantService.groups(query));
  }

  async createGroup(data: CreateGroupInput): Promise<Group> {
    return await firstValueFrom(this.merchantService.createGroup(data));
  }

  async updateGroup(id: number, data: UpdateGroupData): Promise<Group> {
    return await firstValueFrom(this.merchantService.updateGroup({ id, data }));
  }

  async deleteGroup(id: number): Promise<Count> {
    return await firstValueFrom(this.merchantService.deleteGroup({ id }));
  }

  async findServiceById(id: Id): Promise<NullableService> {
    return await firstValueFrom(this.merchantService.findServiceById(id));
  }

  async service(query: QueryRequest): Promise<NullableService> {
    return await firstValueFrom(this.merchantService.service(query));
  }

  async findService(query: QueryRequest): Promise<ServicePagination> {
    return await firstValueFrom(this.merchantService.services(query));
  }

  async createService(data: CreateServiceInput): Promise<Service> {
    return await firstValueFrom(this.merchantService.createService(data));
  }

  async updateService(id: number, data: UpdateServiceData): Promise<Service> {
    return await firstValueFrom(this.merchantService.updateService({ id, data }));
  }

  async deleteService(id: number): Promise<Count> {
    return await firstValueFrom(this.merchantService.deleteService({ id }));
  }

  async findAllBranches(merchantId?: number, query?: BaseQueryDto) {
    let where = null;

    if (merchantId) {
      where = {
        merchantId,
      };
    }

    if (!isEmpty(query?.q)) {
      merge(where, {
        search: {
          _iLike: `%${query?.q}%`,
        },
      });
    }

    const result = await this.findBranches({
      ...query,
      where: where ? JSON.stringify(where) : null,
    });

    return result;
  }

  async findAllGroups(merchantId?: number, query?: BaseQueryDto) {
    let where = null;

    if (merchantId) {
      where = {
        merchantId,
      };
    }

    if (!isEmpty(query?.q)) {
      merge(where, {
        search: {
          _iLike: `%${query?.q}%`,
        },
      });
    }

    const result = await this.findGroups({
      ...query,
      where: where ? JSON.stringify(where) : null,
    });

    return result;
  }

  async findAllServices(query?: BaseQueryDto, merchantId?: number) {
    let where = null;

    if (merchantId) {
      where = {
        merchantId,
      };
    }

    if (!isEmpty(query?.q)) {
      merge(where, {
        search: {
          _iLike: `%${query?.q}%`,
        },
      });
    }

    const result = await this.findService({
      ...query,
      where: where ? JSON.stringify(where) : null,
    });

    return result;
  }
}
