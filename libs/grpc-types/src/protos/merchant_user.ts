/* eslint-disable */
import { EActionRole, EUserRole, EUserStatus, PageMeta } from "./commons";

export const protobufPackage = "merchant_user";

export interface MerchantUser {
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
  role?: EUserRole | undefined;
  actionRole?: EActionRole | undefined;
  status?: EUserStatus | undefined;
  userId?: number | undefined;
  merchantId?: number | undefined;
  branchId?: number | undefined;
}

export interface CreateMerchantUserInput {
  role?: EUserRole | undefined;
  actionRole?: EActionRole | undefined;
  status?: EUserStatus | undefined;
  userId?: number | undefined;
  merchantId?: number | undefined;
  branchId?: number | undefined;
}

export interface MerchantUsers {
  items: MerchantUser[];
  meta?: PageMeta | undefined;
}

export const MERCHANT_USER_PACKAGE_NAME = "merchant_user";
