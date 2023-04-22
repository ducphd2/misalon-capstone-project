/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Count, Id, PageInfo, QueryRequest } from "./commons";
import { CreateDeviceInput, Device, Devices } from "./device";
import { NullValue } from "./google/protobuf/struct";

export const protobufPackage = "ducph_user";

export enum EUserGender {
  MALE = 0,
  FEMALE = 1,
  OTHER = 2,
}

export enum EActionRole {
  MANAGER = 0,
  RECEPTIONIST = 1,
  MASTER_WORKER = 2,
  ASSISTANT_WORKER = 3,
  USER_ROLE = 4,
}

export enum EUserRole {
  USER = 0,
  ADMIN = 1,
  SUPER_ADMIN = 2,
}

export enum ECustomerLevel {
  NORMAL = 0,
  SILVER = 1,
  GOLD = 2,
  PLATINUM = 3,
}

export enum EUserStatus {
  PENDING = 0,
  ACTIVE = 1,
  BANNED = 2,
}

export interface User {
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
  email?: string | undefined;
  password?: string | undefined;
  actionRole?: EActionRole | undefined;
  status?: EUserStatus | undefined;
  fullName?: string | undefined;
  contact?: string | undefined;
  phoneNumber?: string | undefined;
  dobDay?: number | undefined;
  dobMonth?: number | undefined;
  dobYear?: number | undefined;
  role?: EUserRole | undefined;
  gender?: EUserGender | undefined;
  occupation?: string | undefined;
  avatar?: string | undefined;
  address?: string | undefined;
  cityCode?: number | undefined;
  districtCode?: number | undefined;
  wardCode?: number | undefined;
  referrer?: string | undefined;
  referrerCode?: string | undefined;
  level?: ECustomerLevel | undefined;
  customerCode?: string | undefined;
  facebook?: string | undefined;
  zaloPhone?: string | undefined;
  height?: number | undefined;
  weight?: number | undefined;
  memberCardNo?: string | undefined;
  company?: string | undefined;
  taxNo?: string | undefined;
  note?: string | undefined;
  relatedUser?: string | undefined;
  relatedUserRole?: string | undefined;
  relatedUserPhone?: string | undefined;
  branchId?: number | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
}

export interface CreateUserInput {
  email?: string | undefined;
  password?: string | undefined;
  actionRole?: EActionRole | undefined;
  status?: EUserStatus | undefined;
  fullName?: string | undefined;
  contact?: string | undefined;
  phoneNumber?: string | undefined;
  dobDay?: number | undefined;
  dobMonth?: number | undefined;
  dobYear?: number | undefined;
  role?: EUserRole | undefined;
  gender?: EUserGender | undefined;
  occupation?: string | undefined;
  avatar?: string | undefined;
  address?: string | undefined;
  cityCode?: number | undefined;
  districtCode?: number | undefined;
  wardCode?: number | undefined;
  referrer?: string | undefined;
  referrerCode?: string | undefined;
  level?: ECustomerLevel | undefined;
  customerCode?: string | undefined;
  facebook?: string | undefined;
  zaloPhone?: string | undefined;
  height?: number | undefined;
  weight?: number | undefined;
  memberCardNo?: string | undefined;
  company?: string | undefined;
  taxNo?: string | undefined;
  note?: string | undefined;
  relatedUser?: string | undefined;
  relatedUserRole?: string | undefined;
  relatedUserPhone?: string | undefined;
  branchId?: number | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
}

export interface CreateUserRequest {
  user: CreateUserInput | undefined;
  device?: CreateDeviceInput | undefined;
}

export interface FindOneUser {
  user: User | undefined;
}

export interface UserEdge {
  node: User | undefined;
  cursor: string;
}

export interface FindUsersPayload {
  edges: UserEdge[];
  pageInfo: PageInfo | undefined;
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
  actionRole?: EActionRole | undefined;
  status?: EUserStatus | undefined;
  fullName?: string | undefined;
  contact?: string | undefined;
  phoneNumber?: string | undefined;
  dobDay?: number | undefined;
  dobMonth?: number | undefined;
  dobYear?: number | undefined;
  role?: EUserRole | undefined;
  gender?: EUserGender | undefined;
  occupation?: string | undefined;
  avatar?: string | undefined;
  address?: string | undefined;
  cityCode?: number | undefined;
  districtCode?: number | undefined;
  wardCode?: number | undefined;
  referrer?: string | undefined;
  referrerCode?: string | undefined;
  level?: ECustomerLevel | undefined;
  customerCode?: string | undefined;
  facebook?: string | undefined;
  zaloPhone?: string | undefined;
  height?: number | undefined;
  weight?: number | undefined;
  memberCardNo?: string | undefined;
  company?: string | undefined;
  taxNo?: string | undefined;
  note?: string | undefined;
  relatedUser?: string | undefined;
  relatedUserRole?: string | undefined;
  relatedUserPhone?: string | undefined;
  branchId?: number | undefined;
}

export interface FindOneCustomerPayload {
  user: User | undefined;
  customer: User | undefined;
}

export const DUCPH_USER_PACKAGE_NAME = "ducph_user";

export interface UserServiceClient {
  find(request: QueryRequest): Observable<FindUsersPayload>;

  create(request: CreateUserRequest): Observable<FindOneUser>;

  findById(request: Id): Observable<NullableUser>;

  findOne(request: QueryRequest): Observable<NullableUser>;

  count(request: QueryRequest): Observable<Count>;

  update(request: UpdateUserInput): Observable<FindOneUser>;

  findOneCustomer(request: QueryRequest): Observable<FindOneCustomerPayload>;

  deleteCustomer(request: Id): Observable<Count>;

  /** device */

  createDevice(request: CreateDeviceInput): Observable<Device>;

  findDevices(request: QueryRequest): Observable<Devices>;
}

export interface UserServiceController {
  find(request: QueryRequest): Promise<FindUsersPayload> | Observable<FindUsersPayload> | FindUsersPayload;

  create(request: CreateUserRequest): Promise<FindOneUser> | Observable<FindOneUser> | FindOneUser;

  findById(request: Id): Promise<NullableUser> | Observable<NullableUser> | NullableUser;

  findOne(request: QueryRequest): Promise<NullableUser> | Observable<NullableUser> | NullableUser;

  count(request: QueryRequest): Promise<Count> | Observable<Count> | Count;

  update(request: UpdateUserInput): Promise<FindOneUser> | Observable<FindOneUser> | FindOneUser;

  findOneCustomer(
    request: QueryRequest,
  ): Promise<FindOneCustomerPayload> | Observable<FindOneCustomerPayload> | FindOneCustomerPayload;

  deleteCustomer(request: Id): Promise<Count> | Observable<Count> | Count;

  /** device */

  createDevice(request: CreateDeviceInput): Promise<Device> | Observable<Device> | Device;

  findDevices(request: QueryRequest): Promise<Devices> | Observable<Devices> | Devices;
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
      "findOneCustomer",
      "deleteCustomer",
      "createDevice",
      "findDevices",
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
