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
  FindGroupsPayload,
  Group,
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
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';
import { GrpcLogInterceptor } from 'interceptors/interceptors';
import { Observable } from 'rxjs';
import { MerchantEntity } from '@libs/database/entities';

import { MerchantService } from './merchant.service';

import { BranchService } from '@/merchant-service/branch/branch.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller()
@MerchantProto.MerchantServiceControllerMethods()
export class MerchantController implements MerchantProto.MerchantServiceController {
  constructor(private readonly merchantService: MerchantService, private readonly branchService: BranchService) {}

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

  findOne(request: QueryRequest): Promise<MerchantProto.NullableMerchant> {
    throw new Error('Method not implemented.');
  }

  async create(request: MerchantProto.CreateInput): Promise<MerchantProto.CreateMerchantResponse> {
    const res = await this.merchantService.create(request);
    return res;
  }

  count(request: QueryRequest): Count | Observable<Count> | Promise<Count> {
    throw new Error('Method not implemented.');
  }

  async findById(id: Id): Promise<MerchantProto.NullableMerchant> {
    const merchant: MerchantEntity = await this.merchantService.findById(id.id);
    return { merchant };
  }

  branch(request: QueryRequest): NullableBranch | Promise<NullableBranch> | Observable<NullableBranch> {
    throw new Error('Method not implemented.');
  }

  async branches(request: QueryRequest): Promise<Branches> {
    const branches = await this.branchService.find(request);
    return { branches };
  }

  findBranchById(request: Id): NullableBranch | Promise<NullableBranch> | Observable<NullableBranch> {
    throw new Error('Method not implemented.');
  }

  createBranch(request: CreateBranchInput): Branch | Promise<Branch> | Observable<Branch> {
    throw new Error('Method not implemented.');
  }

  updateBranch(request: UpdateBranchInput): Branch | Promise<Branch> | Observable<Branch> {
    throw new Error('Method not implemented.');
  }

  deleteBranch(request: Id): Count | Observable<Count> | Promise<Count> {
    throw new Error('Method not implemented.');
  }

  group(request: QueryRequest): NullableGroup | Promise<NullableGroup> | Observable<NullableGroup> {
    throw new Error('Method not implemented.');
  }

  groups(request: QueryRequest): FindGroupsPayload | Promise<FindGroupsPayload> | Observable<FindGroupsPayload> {
    throw new Error('Method not implemented.');
  }

  findGroupById(request: Id): NullableGroup | Promise<NullableGroup> | Observable<NullableGroup> {
    throw new Error('Method not implemented.');
  }

  createGroup(request: CreateGroupInput): Group | Promise<Group> | Observable<Group> {
    throw new Error('Method not implemented.');
  }

  updateGroup(request: UpdateGroupInput): Group | Promise<Group> | Observable<Group> {
    throw new Error('Method not implemented.');
  }

  deleteGroup(request: Id): Count | Observable<Count> | Promise<Count> {
    throw new Error('Method not implemented.');
  }

  service(request: QueryRequest): NullableService | Promise<NullableService> | Observable<NullableService> {
    throw new Error('Method not implemented.');
  }

  services(
    request: QueryRequest,
  ): FindServicesPayload | Promise<FindServicesPayload> | Observable<FindServicesPayload> {
    throw new Error('Method not implemented.');
  }

  findServiceById(request: Id): NullableService | Promise<NullableService> | Observable<NullableService> {
    throw new Error('Method not implemented.');
  }

  createService(request: CreateServiceInput): Service | Promise<Service> | Observable<Service> {
    throw new Error('Method not implemented.');
  }

  updateService(request: UpdateServiceInput): Service | Promise<Service> | Observable<Service> {
    throw new Error('Method not implemented.');
  }

  deleteService(request: Id): Count | Observable<Count> | Promise<Count> {
    throw new Error('Method not implemented.');
  }

  findServiceOffsetPagination(
    request: QueryRequest,
  ): FindServiceOffsetPagination | Promise<FindServiceOffsetPagination> | Observable<FindServiceOffsetPagination> {
    throw new Error('Method not implemented.');
  }
}
