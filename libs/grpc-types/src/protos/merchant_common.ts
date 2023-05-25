/* eslint-disable */

export const protobufPackage = "merchant_common";

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

export interface Merchant {
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

export interface Service {
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
  merchantId?: number | undefined;
  price?:
    | number
    | undefined;
  /**
   * optional double initialPrice = 11;
   * optional double capitalPrice = 12;
   */
  durationHour?: number | undefined;
  durationMinute?: number | undefined;
  sku?: string | undefined;
  code?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
  type?: EServiceType | undefined;
}

export interface Branch {
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

export const MERCHANT_COMMON_PACKAGE_NAME = "merchant_common";
