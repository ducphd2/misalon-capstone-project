import { BranchEntity, GroupEntity, MerchantEntity, ServiceEntity } from '@libs/database/entities';
import { FindBranchesPayload, NullableBranch, UpdateBranchData } from '@libs/grpc-types/protos/branch';
import { Count, GqlQuery, Id, QueryRequest } from '@libs/grpc-types/protos/commons';
import { FindGroupsPayload, NullableGroup, UpdateGroupData } from '@libs/grpc-types/protos/group';
import {
  CreateInput,
  FindMerchantsPayload,
  MERCHANT_PACKAGE_NAME,
  MERCHANT_SERVICE_NAME,
  MerchantServiceClient,
  NullableMerchant,
} from '@libs/grpc-types/protos/merchant';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  FindServiceOffsetPagination,
  FindServicesPayload,
  NullableService,
  UpdateServiceData,
} from '@libs/grpc-types/protos/service';

import { CreateBranchInput, CreateGroupInput, CreateServiceInput } from '@/api-gateway/types';

@Injectable()
export class MerchantCommonService implements OnModuleInit {
  private merchantService: MerchantServiceClient;

  constructor(@Inject(MERCHANT_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.merchantService = this.client.getService<MerchantServiceClient>(MERCHANT_SERVICE_NAME);
  }

  async create(data: CreateInput): Promise<MerchantEntity> {
    return await firstValueFrom(this.merchantService.create(data));
  }

  async findById(id: Id): Promise<NullableMerchant> {
    return await firstValueFrom(this.merchantService.findById(id));
  }

  async find(query: GqlQuery): Promise<FindMerchantsPayload> {
    return await firstValueFrom(
      this.merchantService.find({
        ...query,
        where: JSON.stringify(query.where),
      }),
    );
  }

  async findBranchById(id: Id): Promise<NullableBranch> {
    return await firstValueFrom(this.merchantService.findBranchById(id));
  }

  async branch(query: GqlQuery): Promise<NullableBranch> {
    return await firstValueFrom(
      this.merchantService.branch({
        ...query,
        where: JSON.stringify(query.where),
      }),
    );
  }

  async findBranches(query: GqlQuery): Promise<FindBranchesPayload> {
    return await firstValueFrom(
      this.merchantService.branches({
        ...query,
        where: JSON.stringify(query.where),
      }),
    );
  }

  async createBranch(data: CreateBranchInput): Promise<BranchEntity> {
    return await firstValueFrom(this.merchantService.createBranch(data));
  }

  async updateBranch(id: number, data: UpdateBranchData): Promise<BranchEntity> {
    return await firstValueFrom(this.merchantService.updateBranch({ id, data }));
  }

  async deleteBranch(id: number): Promise<Count> {
    return await firstValueFrom(this.merchantService.deleteBranch({ id }));
  }

  async findGroupById(id: Id): Promise<NullableGroup> {
    return await firstValueFrom(this.merchantService.findGroupById(id));
  }

  async group(query: GqlQuery): Promise<NullableGroup> {
    return await firstValueFrom(
      this.merchantService.group({
        ...query,
        where: JSON.stringify(query.where),
      }),
    );
  }

  async findGroups(query: GqlQuery): Promise<FindGroupsPayload> {
    return await firstValueFrom(
      this.merchantService.groups({
        ...query,
        where: JSON.stringify(query.where),
      }),
    );
  }

  async createGroup(data: CreateGroupInput): Promise<GroupEntity> {
    return await firstValueFrom(this.merchantService.createGroup(data));
  }

  async updateGroup(id: number, data: UpdateGroupData): Promise<GroupEntity> {
    return await firstValueFrom(this.merchantService.updateGroup({ id, data }));
  }

  async deleteGroup(id: number): Promise<Count> {
    return await firstValueFrom(this.merchantService.deleteGroup({ id }));
  }

  async findServiceById(id: Id): Promise<NullableService> {
    return await firstValueFrom(this.merchantService.findServiceById(id));
  }

  async service(query: GqlQuery): Promise<NullableService> {
    return await firstValueFrom(
      this.merchantService.service({
        ...query,
        where: JSON.stringify(query.where),
      }),
    );
  }

  async findService(query: GqlQuery): Promise<FindServicesPayload> {
    return await firstValueFrom(
      this.merchantService.services({
        ...query,
        where: JSON.stringify(query.where),
      }),
    );
  }

  async createService(data: CreateServiceInput): Promise<ServiceEntity> {
    return await firstValueFrom(this.merchantService.createService(data));
  }

  async updateService(id: number, data: UpdateServiceData): Promise<ServiceEntity> {
    return await firstValueFrom(this.merchantService.updateService({ id, data }));
  }

  async deleteService(id: number): Promise<Count> {
    return await firstValueFrom(this.merchantService.deleteService({ id }));
  }

  async findServiceOffsetPagination(query: QueryRequest): Promise<FindServiceOffsetPagination> {
    return await firstValueFrom(this.merchantService.findServiceOffsetPagination(query));
  }
}
