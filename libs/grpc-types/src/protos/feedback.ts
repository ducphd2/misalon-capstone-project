/* eslint-disable */
import { PageMeta } from "./commons";
import { NullValue } from "./google/protobuf/struct";

export const protobufPackage = "feedback";

export enum EFeedbackType {
  SERVICE = 0,
  BOOKING = 1,
}

export interface UpdateData {
  merchantId?: number | undefined;
  groupId?: number | undefined;
  serviceId?: number | undefined;
  bookingId?: number | undefined;
  rating?: number | undefined;
  userId?: number | undefined;
  content?: string | undefined;
}

export interface UpdateInput {
  id: number;
  data: UpdateData | undefined;
}

export interface CreateInput {
  merchantId?: number | undefined;
  groupId?: number | undefined;
  serviceId?: number | undefined;
  bookingId?: number | undefined;
  rating?: number | undefined;
  userId?: number | undefined;
  content?: string | undefined;
  type?: EFeedbackType | undefined;
}

export interface Feedback {
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
  groupId?: number | undefined;
  serviceId?: number | undefined;
  bookingId?: number | undefined;
  rating?: number | undefined;
  userId?: number | undefined;
  content?: string | undefined;
}

export interface NullableItem {
  null?: NullValue | undefined;
  feedback?: Feedback | undefined;
}

export interface ItemPagination {
  items: Feedback[];
  meta?: PageMeta | undefined;
}

export const FEEDBACK_PACKAGE_NAME = "feedback";
