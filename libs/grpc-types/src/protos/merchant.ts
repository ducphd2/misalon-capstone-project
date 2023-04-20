/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Branch, CreateBranchInput, FindBranchesPayload, NullableBranch, UpdateBranchInput } from "./branch";
import { Count, GqlQuery, Id, PageInfo, QueryRequest } from "./commons";
import { NullValue } from "./google/protobuf/struct";
import { CreateGroupInput, FindGroupsPayload, Group, NullableGroup, UpdateGroupInput } from "./group";
import {
  CreateServiceInput,
  FindServiceOffsetPagination,
  FindServicesPayload,
  NullableService,
  Service,
  UpdateServiceInput,
} from "./service";

export const protobufPackage = "merchant";

export interface UpdateMerchantData {
  name?: string | undefined;
  phone?: string | undefined;
  address?: string | undefined;
  userId?: number | undefined;
  cityCode?: number | undefined;
  districtCode?: number | undefined;
  wardCode?: number | undefined;
  city?: string | undefined;
  district?: string | undefined;
  ward?: string | undefined;
}

export interface UpdateMerchantInput {
  id: number;
  data: UpdateMerchantData | undefined;
}

export interface CreateInput {
  name?: string | undefined;
  phone?: string | undefined;
  address?: string | undefined;
  userId?: number | undefined;
  cityCode?: number | undefined;
  districtCode?: number | undefined;
  wardCode?: number | undefined;
  city?: string | undefined;
  district?: string | undefined;
  ward?: string | undefined;
}

export interface Merchant {
  /** default field */
  id: number;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  deletedAt?: string | undefined;
  createdBy?: string | undefined;
  updatedBy?: string | undefined;
  deletedBy?:
    | string
    | undefined;
  /** reserved field */
  name?: string | undefined;
  phone?: string | undefined;
  address?: string | undefined;
  userId?: number | undefined;
  cityCode?: number | undefined;
  districtCode?: number | undefined;
  wardCode?: number | undefined;
  city?: string | undefined;
  district?: string | undefined;
  ward?: string | undefined;
}

export interface MerchantEdge {
  node: Merchant | undefined;
  cursor: string;
}

export interface FindMerchantsPayload {
  edges: MerchantEdge[];
  pageInfo: PageInfo | undefined;
}

export interface NullableMerchant {
  null?: NullValue | undefined;
  merchant?: Merchant | undefined;
}

export const MERCHANT_PACKAGE_NAME = "merchant";

export interface MerchantServiceClient {
  find(request: GqlQuery): Observable<FindMerchantsPayload>;

  findOne(request: GqlQuery): Observable<NullableMerchant>;

  create(request: CreateInput): Observable<Merchant>;

  count(request: GqlQuery): Observable<Count>;

  findById(request: Id): Observable<NullableMerchant>;

  /** branch */

  branch(request: GqlQuery): Observable<NullableBranch>;

  branches(request: GqlQuery): Observable<FindBranchesPayload>;

  findBranchById(request: Id): Observable<NullableBranch>;

  createBranch(request: CreateBranchInput): Observable<Branch>;

  updateBranch(request: UpdateBranchInput): Observable<Branch>;

  deleteBranch(request: Id): Observable<Count>;

  /** group */

  group(request: GqlQuery): Observable<NullableGroup>;

  groups(request: GqlQuery): Observable<FindGroupsPayload>;

  findGroupById(request: Id): Observable<NullableGroup>;

  createGroup(request: CreateGroupInput): Observable<Group>;

  updateGroup(request: UpdateGroupInput): Observable<Group>;

  deleteGroup(request: Id): Observable<Count>;

  /** service */

  service(request: GqlQuery): Observable<NullableService>;

  services(request: GqlQuery): Observable<FindServicesPayload>;

  findServiceById(request: Id): Observable<NullableService>;

  createService(request: CreateServiceInput): Observable<Service>;

  updateService(request: UpdateServiceInput): Observable<Service>;

  deleteService(request: Id): Observable<Count>;

  findServiceOffsetPagination(request: QueryRequest): Observable<FindServiceOffsetPagination>;
}

export interface MerchantServiceController {
  find(request: GqlQuery): Promise<FindMerchantsPayload> | Observable<FindMerchantsPayload> | FindMerchantsPayload;

  findOne(request: GqlQuery): Promise<NullableMerchant> | Observable<NullableMerchant> | NullableMerchant;

  create(request: CreateInput): Promise<Merchant> | Observable<Merchant> | Merchant;

  count(request: GqlQuery): Promise<Count> | Observable<Count> | Count;

  findById(request: Id): Promise<NullableMerchant> | Observable<NullableMerchant> | NullableMerchant;

  /** branch */

  branch(request: GqlQuery): Promise<NullableBranch> | Observable<NullableBranch> | NullableBranch;

  branches(request: GqlQuery): Promise<FindBranchesPayload> | Observable<FindBranchesPayload> | FindBranchesPayload;

  findBranchById(request: Id): Promise<NullableBranch> | Observable<NullableBranch> | NullableBranch;

  createBranch(request: CreateBranchInput): Promise<Branch> | Observable<Branch> | Branch;

  updateBranch(request: UpdateBranchInput): Promise<Branch> | Observable<Branch> | Branch;

  deleteBranch(request: Id): Promise<Count> | Observable<Count> | Count;

  /** group */

  group(request: GqlQuery): Promise<NullableGroup> | Observable<NullableGroup> | NullableGroup;

  groups(request: GqlQuery): Promise<FindGroupsPayload> | Observable<FindGroupsPayload> | FindGroupsPayload;

  findGroupById(request: Id): Promise<NullableGroup> | Observable<NullableGroup> | NullableGroup;

  createGroup(request: CreateGroupInput): Promise<Group> | Observable<Group> | Group;

  updateGroup(request: UpdateGroupInput): Promise<Group> | Observable<Group> | Group;

  deleteGroup(request: Id): Promise<Count> | Observable<Count> | Count;

  /** service */

  service(request: GqlQuery): Promise<NullableService> | Observable<NullableService> | NullableService;

  services(request: GqlQuery): Promise<FindServicesPayload> | Observable<FindServicesPayload> | FindServicesPayload;

  findServiceById(request: Id): Promise<NullableService> | Observable<NullableService> | NullableService;

  createService(request: CreateServiceInput): Promise<Service> | Observable<Service> | Service;

  updateService(request: UpdateServiceInput): Promise<Service> | Observable<Service> | Service;

  deleteService(request: Id): Promise<Count> | Observable<Count> | Count;

  findServiceOffsetPagination(
    request: QueryRequest,
  ): Promise<FindServiceOffsetPagination> | Observable<FindServiceOffsetPagination> | FindServiceOffsetPagination;
}

export function MerchantServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "find",
      "findOne",
      "create",
      "count",
      "findById",
      "branch",
      "branches",
      "findBranchById",
      "createBranch",
      "updateBranch",
      "deleteBranch",
      "group",
      "groups",
      "findGroupById",
      "createGroup",
      "updateGroup",
      "deleteGroup",
      "service",
      "services",
      "findServiceById",
      "createService",
      "updateService",
      "deleteService",
      "findServiceOffsetPagination",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("MerchantService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("MerchantService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const MERCHANT_SERVICE_NAME = "MerchantService";
