/* eslint-disable */

export const protobufPackage = "commons";

export enum ESortDirection {
  ASC = 0,
  DESC = 1,
}

export enum EUserGender {
  MALE = 0,
  FEMALE = 1,
  OTHER = 2,
}

export enum EUserRole {
  USER = 0,
  ADMIN = 1,
  EMPLOYEE = 2,
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

export enum ENotificationType {
  BOOKING = 0,
  CHAT = 1,
  COMMENT = 2,
  REPLY_COMMENT = 3,
}

export enum EBookingStatus {
  BOOKING_PENDING = 0,
  BOOKING_APPROVE = 1,
  BOOKING_CANCELLED = 2,
  BOOKING_REJECT = 3,
  BOOKING_FINISHED = 4,
  BOOKING_PAYMENT_PENDING = 5,
  BOOKING_PAYMENT_FINISHED = 6,
  BOOKING_PAYMENT_FAILED = 7,
}

export interface Id {
  id: number;
}

export interface GrQuery {
  filter: string;
  paging: Paging | undefined;
  sorting: Sort[];
}

export interface GqlQuery {
  select: string[];
  where?: string | undefined;
  orderBy: string[];
  limit?: number | undefined;
  before?: string | undefined;
  after?: string | undefined;
}

export interface PageInfo {
  startCursor?: string | undefined;
  endCursor?: string | undefined;
  hasNextPage?: boolean | undefined;
  hasPreviousPage?: boolean | undefined;
}

export interface Count {
  count: number;
}

export interface TotalCount {
  totalCount: number;
}

export interface QueryRequest {
  where?: string | undefined;
  page?: number | undefined;
  limit?: number | undefined;
  searchKey?: string | undefined;
  orderBy?: string | undefined;
  orderDirection?: string | undefined;
}

export interface Sort {
  field: string;
  direction: ESortDirection;
  nulls: Sort_SortNulls;
}

export enum Sort_SortNulls {
  NULLS_FIRST = 0,
  NULLS_LAST = 1,
}

export interface Paging {
  limit: number;
  offset: number;
}

export interface PageMeta {
  total?: number | undefined;
  totalPage?: number | undefined;
  page?: number | undefined;
  limit?: number | undefined;
}

export const COMMONS_PACKAGE_NAME = "commons";
