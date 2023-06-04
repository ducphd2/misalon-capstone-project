/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Count, EUserGender, EUserRole, EUserStatus, Id, PageMeta, QueryRequest } from "./commons";
import { CreateDeviceInput, Device, Devices } from "./device";
import { NullValue } from "./google/protobuf/struct";
import { Branch, Merchant } from "./merchant_common";

export const protobufPackage = "ducph_user";

export enum ELangNumber {
  VI = 0,
  EN = 1,
}

export interface User {
  /** default field */
  id: number;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  deletedAt?: string | undefined;
  createdBy?: number | undefined;
  updatedBy?: number | undefined;
  deletedBy?:
    | number
    | undefined;
  /** reserved field */
  email?: string | undefined;
  password?: string | undefined;
  status?: EUserStatus | undefined;
  fullName?: string | undefined;
  subdomain?: string | undefined;
  phoneNumber?: string | undefined;
  role?: EUserRole | undefined;
  gender?: EUserGender | undefined;
  job?: string | undefined;
  avatar?: string | undefined;
  address?: string | undefined;
  branchId?: number | undefined;
  merchantId?: number | undefined;
  lang?: ELangNumber | undefined;
  branch?: Branch | undefined;
  age?: number | undefined;
  merchant?: Merchant | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
}

export interface CreateUserInput {
  email?: string | undefined;
  password?: string | undefined;
  status?: EUserStatus | undefined;
  fullName?: string | undefined;
  phoneNumber?: string | undefined;
  role?: EUserRole | undefined;
  gender?: EUserGender | undefined;
  occupation?: string | undefined;
  avatar?: string | undefined;
  address?: string | undefined;
  subdomain?: string | undefined;
  job?: string | undefined;
  age?: number | undefined;
  branchId?: number | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
  merchantId?: number | undefined;
  isRetailCustomer?: boolean | undefined;
  lang?: ELangNumber | undefined;
}

export interface CreateUserRequest {
  user: CreateUserInput | undefined;
  device?: CreateDeviceInput | undefined;
}

export interface FindOneUser {
  user: User | undefined;
}

export interface UpdateUserInput {
  id: number;
  data: UpdateUserData | undefined;
}

export interface NullableUser {
  null?: NullValue | undefined;
  user?: User | undefined;
}

export interface UpdateUserData {
  email?: string | undefined;
  password?: string | undefined;
  status?: EUserStatus | undefined;
  fullName?: string | undefined;
  phoneNumber?: string | undefined;
  role?: EUserRole | undefined;
  gender?: EUserGender | undefined;
  avatar?: string | undefined;
  address?: string | undefined;
  age?: number | undefined;
  job?: string | undefined;
  branchId?: number | undefined;
  merchantId?: number | undefined;
  lang?: ELangNumber | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
}

export interface AddOperatorInput {
  user: CreateUserInput | undefined;
}

export interface AdminUpdateCustomerInput {
  id: number;
  user: UpdateUserData | undefined;
}

export interface UserPagination {
  items: User[];
  meta?: PageMeta | undefined;
}

export const DUCPH_USER_PACKAGE_NAME = "ducph_user";

export interface UserServiceClient {
  find(request: QueryRequest): Observable<UserPagination>;

  create(request: CreateUserRequest): Observable<FindOneUser>;

  findById(request: Id): Observable<NullableUser>;

  findOne(request: QueryRequest): Observable<NullableUser>;

  count(request: QueryRequest): Observable<Count>;

  update(request: UpdateUserInput): Observable<FindOneUser>;

  deleteCustomer(request: Id): Observable<Count>;

  /** device */

  createDevice(request: CreateDeviceInput): Observable<Device>;

  findDevices(request: QueryRequest): Observable<Devices>;

  upsertDevice(request: CreateDeviceInput): Observable<Device>;

  addOperator(request: AddOperatorInput): Observable<FindOneUser>;

  countCustomer(request: QueryRequest): Observable<Count>;

  /** customer */

  addCustomer(request: AddOperatorInput): Observable<FindOneUser>;

  updateCustomer(request: AdminUpdateCustomerInput): Observable<FindOneUser>;
}

export interface UserServiceController {
  find(request: QueryRequest): Promise<UserPagination> | Observable<UserPagination> | UserPagination;

  create(request: CreateUserRequest): Promise<FindOneUser> | Observable<FindOneUser> | FindOneUser;

  findById(request: Id): Promise<NullableUser> | Observable<NullableUser> | NullableUser;

  findOne(request: QueryRequest): Promise<NullableUser> | Observable<NullableUser> | NullableUser;

  count(request: QueryRequest): Promise<Count> | Observable<Count> | Count;

  update(request: UpdateUserInput): Promise<FindOneUser> | Observable<FindOneUser> | FindOneUser;

  deleteCustomer(request: Id): Promise<Count> | Observable<Count> | Count;

  /** device */

  createDevice(request: CreateDeviceInput): Promise<Device> | Observable<Device> | Device;

  findDevices(request: QueryRequest): Promise<Devices> | Observable<Devices> | Devices;

  upsertDevice(request: CreateDeviceInput): Promise<Device> | Observable<Device> | Device;

  addOperator(request: AddOperatorInput): Promise<FindOneUser> | Observable<FindOneUser> | FindOneUser;

  countCustomer(request: QueryRequest): Promise<Count> | Observable<Count> | Count;

  /** customer */

  addCustomer(request: AddOperatorInput): Promise<FindOneUser> | Observable<FindOneUser> | FindOneUser;

  updateCustomer(request: AdminUpdateCustomerInput): Promise<FindOneUser> | Observable<FindOneUser> | FindOneUser;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "find",
      "create",
      "findById",
      "findOne",
      "count",
      "update",
      "deleteCustomer",
      "createDevice",
      "findDevices",
      "upsertDevice",
      "addOperator",
      "countCustomer",
      "addCustomer",
      "updateCustomer",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
