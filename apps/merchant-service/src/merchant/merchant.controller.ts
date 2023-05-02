import { MerchantProto } from '@libs/grpc-types';
import {
  Branch,
  BranchPagination,
  Branches,
  CreateBranchInput,
  NullableBranch,
  UpdateBranchInput,
} from '@libs/grpc-types/protos/branch';
import { Count, Id, QueryRequest } from '@libs/grpc-types/protos/commons';
import {
  CreateGroupInput,
  Group,
  GroupPagination,
  NullableGroup,
  UpdateGroupInput,
} from '@libs/grpc-types/protos/group';
import {
  CreateServiceInput,
  FindServiceOffsetPagination,
  FindServicesPayload,
  NullableService,
  Service,
  UpdateServiceInput,
} from '@libs/grpc-types/protos/service';
import { GrpcLogInterceptor } from '@libs/interceptors';
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';
import { Observable } from 'rxjs';

import { BranchService } from '../branch/branch.service';
import { GroupService } from '../group/group.service';
import { ServicesService } from '../service/service.service';

import { MerchantService } from './merchant.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller()
@MerchantProto.MerchantServiceControllerMethods()
export class MerchantController implements MerchantProto.MerchantServiceController {
  constructor(
    private readonly merchantService: MerchantService,
    private readonly branchService: BranchService,
    private readonly groupService: GroupService,
    private readonly servicesService: ServicesService,
  ) {}

  async groups(request: QueryRequest): Promise<GroupPagination> {
    const result = await this.groupService.findWithPaging(request);

    return result;
  }

  findAll(
    request: QueryRequest,
  ): MerchantProto.Merchants | Promise<MerchantProto.Merchants> | Observable<MerchantProto.Merchants> {
    throw new Error('Method not implemented.');
  }

  async findBranches(request: QueryRequest): Promise<BranchPagination> {
    return await this.branchService.findWithPaging(request);
  }

  async find(request: QueryRequest): Promise<MerchantProto.MerchantPagination> {
    const merchants = await this.merchantService.findWithPaging(request);
    return merchants;
  }

  async findOne(request: QueryRequest): Promise<MerchantProto.NullableMerchant> {
    const merchant = await this.merchantService.findOne(request);
    return { merchant };
  }

  async create(request: MerchantProto.CreateInput): Promise<MerchantProto.CreateMerchantResponse> {
    const res = await this.merchantService.create(request);
    return res;
  }

  count(request: QueryRequest): Count | Observable<Count> | Promise<Count> {
    throw new Error('Method not implemented.');
  }

  async findById(id: Id): Promise<MerchantProto.NullableMerchant> {
    const merchant = await this.merchantService.findById(id.id);
    return { merchant };
  }

  async branch(request: QueryRequest): Promise<NullableBranch> {
    const branch = await this.branchService.findOne({
      where: JSON.parse(request.where),
    });

    return { branch };
  }

  async branches(request: QueryRequest): Promise<Branches> {
    const branches = await this.branchService.find(request);
    return { branches };
  }

  async findBranchById(request: Id): Promise<NullableBranch> {
    const branch = await this.branchService.findById(request.id);
    return { branch };
  }

  async createBranch(request: CreateBranchInput): Promise<Branch> {
    const branch = await this.branchService.create(request);
    return branch;
  }

  async updateBranch(request: UpdateBranchInput): Promise<Branch> {
    const branch = await this.branchService.update(request);
    return branch;
  }

  async deleteBranch(request: Id): Promise<Count> {
    const count = await this.branchService.delete(request.id);
    return { count };
  }

  group(request: QueryRequest): NullableGroup | Promise<NullableGroup> | Observable<NullableGroup> {
    throw new Error('Method not implemented.');
  }

  findGroupById(request: Id): NullableGroup | Promise<NullableGroup> | Observable<NullableGroup> {
    throw new Error('Method not implemented.');
  }

  async createGroup(request: CreateGroupInput): Promise<Group> {
    const group = await this.groupService.create(request);

    return group;
  }

  async updateGroup(request: UpdateGroupInput): Promise<Group> {
    const group = await this.groupService.update(request);

    return group;
  }

  async deleteGroup(request: Id): Promise<Count> {
    const count = await this.groupService.delete(request.id);
    return { count };
  }

  async service(request: QueryRequest): Promise<NullableService> {
    const service = await this.servicesService.findOne({
      where: JSON.parse(request.where),
    });

    return { service };
  }

  async services(request: QueryRequest): Promise<FindServicesPayload> {
    const service = await this.servicesService.findWithPaging(request);

    return service;
  }

  async findServiceById(request: Id): Promise<NullableService> {
    const service = await this.servicesService.findById(request.id);

    return { service };
  }

  async createService(request: CreateServiceInput): Promise<Service> {
    const service = await this.servicesService.create(request);

    return service;
  }

  async updateService(request: UpdateServiceInput): Promise<Service> {
    const service = await this.servicesService.update(request);

    return service;
  }

  async deleteService(request: Id): Promise<Count> {
    const count = await this.servicesService.delete(request.id);
    return { count };
  }

  findServiceOffsetPagination(
    request: QueryRequest,
  ): FindServiceOffsetPagination | Promise<FindServiceOffsetPagination> | Observable<FindServiceOffsetPagination> {
    throw new Error('Method not implemented.');
  }
}
