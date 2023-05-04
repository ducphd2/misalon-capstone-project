/* eslint-disable */
import { PageInfo, PageMeta } from "./commons";
import { NullValue } from "./google/protobuf/struct";

export const protobufPackage = "branch";

export interface UpdateBranchData {
  name?: string | undefined;
  phone?: string | undefined;
  address?: string | undefined;
  merchantId?: number | undefined;
  cityCode?: number | undefined;
  districtCode?: number | undefined;
  wardCode?: number | undefined;
  city?: string | undefined;
  district?: string | undefined;
  ward?: string | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
}

export interface UpdateBranchInput {
  id: number;
  data: UpdateBranchData | undefined;
}

export interface CreateBranchInput {
  name?: string | undefined;
  phone?: string | undefined;
  address?: string | undefined;
  merchantId?: number | undefined;
  cityCode?: number | undefined;
  districtCode?: number | undefined;
  wardCode?: number | undefined;
  city?: string | undefined;
  district?: string | undefined;
  ward?: string | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
}

export interface Branch {
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
  merchantId?: number | undefined;
  cityCode?: number | undefined;
  districtCode?: number | undefined;
  wardCode?: number | undefined;
  city?: string | undefined;
  district?: string | undefined;
  ward?: string | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
}

export interface BranchEdge {
  node: Branch | undefined;
  cursor: string;
}

export interface FindBranchesPayload {
  edges: BranchEdge[];
  pageInfo: PageInfo | undefined;
}

export interface NullableBranch {
  null?: NullValue | undefined;
  branch?: Branch | undefined;
}

export interface Branches {
  branches: Branch[];
}

export interface BranchPagination {
  items: Branch[];
  meta?: PageMeta | undefined;
}

export const BRANCH_PACKAGE_NAME = "branch";
