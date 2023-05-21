/* eslint-disable */
import { PageMeta } from "./commons";
import { NullValue } from "./google/protobuf/struct";
import { Merchant } from "./merchant_common";

export const protobufPackage = "service";

export enum EServiceShowType {
  BOTH = 0,
  CASHIER = 1,
  BOOKING = 2,
  NONE = 3,
}

export enum EServiceType {
  SERVICE = 0,
  PRODUCT = 1,
}

export interface UpdateServiceData {
  merchantId?: number | undefined;
  price?: number | undefined;
  initialPrice?: number | undefined;
  durationHour?: number | undefined;
  durationMinute?: number | undefined;
  sku?: string | undefined;
  code?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
  type?: EServiceType | undefined;
}

export interface UpdateServiceInput {
  id: number;
  data: UpdateServiceData | undefined;
}

export interface CreateServiceInput {
  merchantId?: number | undefined;
  price?: number | undefined;
  initialPrice?: number | undefined;
  durationHour?: number | undefined;
  durationMinute?: number | undefined;
  sku?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
  type?: EServiceType | undefined;
}

export interface Service {
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
  price?: number | undefined;
  initialPrice?: number | undefined;
  durationHour?: number | undefined;
  durationMinute?: number | undefined;
  sku?: string | undefined;
  code?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
  type?: EServiceType | undefined;
  merchant?: Merchant | undefined;
}

export interface NullableService {
  null?: NullValue | undefined;
  service?: Service | undefined;
}

export interface ServicePagination {
  items: Service[];
  meta?: PageMeta | undefined;
}

export const SERVICE_PACKAGE_NAME = "service";
