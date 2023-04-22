import { MerchantProto } from '@libs/grpc-types';
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';
import { GrpcLogInterceptor } from 'interceptors/interceptors';
import { NullableBranch, Branches, CreateBranchInput, Branch, UpdateBranchInput } from '@libs/grpc-types/protos/branch';
import { QueryRequest, Count, Id } from '@libs/grpc-types/protos/commons';
import {
  NullableGroup,
  FindGroupsPayload,
  CreateGroupInput,
  Group,
  UpdateGroupInput,
} from '@libs/grpc-types/protos/group';
import {
  NullableService,
  FindServicesPayload,
  CreateServiceInput,
  Service,
  UpdateServiceInput,
  FindServiceOffsetPagination,
} from '@libs/grpc-types/protos/service';
import { Observable } from 'rxjs';

import { MerchantService } from './merchant.service';

import { BranchService } from '@/merchant-service/branch/branch.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller()
@MerchantProto.MerchantServiceControllerMethods()
export class MerchantController implements MerchantProto.MerchantServiceController {
  constructor(private readonly merchantService: MerchantService, private readonly branchService: BranchService) {}

  async find(request: QueryRequest): Promise<MerchantProto.Merchants> {
    const merchants = await this.merchantService.find(request);
    return { merchants };
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

  findById(request: Id): Promise<MerchantProto.NullableMerchant> {
    throw new Error('Method not implemented.');
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
