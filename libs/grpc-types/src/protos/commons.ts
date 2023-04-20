/* eslint-disable */

export const protobufPackage = "commons";

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
  direction: Sort_SortDirection;
  nulls: Sort_SortNulls;
}

export enum Sort_SortDirection {
  ASC = 0,
  DESC = 1,
}

export enum Sort_SortNulls {
  NULLS_FIRST = 0,
  NULLS_LAST = 1,
}

export interface Paging {
  limit: number;
  offset: number;
}

export const COMMONS_PACKAGE_NAME = "commons";
