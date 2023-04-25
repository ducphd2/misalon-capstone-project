/* eslint-disable */
import { PageInfo, PageMeta } from "./commons";
import { NullValue } from "./google/protobuf/struct";

export const protobufPackage = "ducph.group";

export interface UpdateGroupData {
  merchantId?: number | undefined;
  sku?: string | undefined;
  code?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
}

export interface UpdateGroupInput {
  id: number;
  data: UpdateGroupData | undefined;
}

export interface CreateGroupInput {
  merchantId?: number | undefined;
  sku?: string | undefined;
  code?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
}

export interface Group {
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
  merchantId?: number | undefined;
  sku?: string | undefined;
  code?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
}

export interface GroupEdge {
  node: Group | undefined;
  cursor: string;
}

export interface FindGroupsPayload {
  edges: GroupEdge[];
  pageInfo: PageInfo | undefined;
}

export interface NullableGroup {
  null?: NullValue | undefined;
  group?: Group | undefined;
}

export interface GroupPagination {
  items: Group[];
  meta?: PageMeta | undefined;
}

export const DUCPH_GROUP_PACKAGE_NAME = "ducph.group";
