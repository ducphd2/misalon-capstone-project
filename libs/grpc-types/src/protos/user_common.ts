/* eslint-disable */
import { ECustomerLevel, EUserGender, EUserRole, EUserStatus } from "./commons";

export const protobufPackage = "user_common";

export enum ELangNumber {
  VI = 0,
  EN = 1,
}

export enum EDeviceOs {
  ANDROID = 0,
  IOS = 1,
}

export interface Device {
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
  os?: EDeviceOs | undefined;
  deviceId?: string | undefined;
  token?: string | undefined;
  userId?: number | undefined;
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
  isRetailCustomer?: boolean | undefined;
  merchantId?: number | undefined;
  lang?: ELangNumber | undefined;
}

export const USER_COMMON_PACKAGE_NAME = "user_common";
