/* eslint-disable */
import { PageMeta } from "./commons";

export const protobufPackage = "device";

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

export interface CreateDeviceInput {
  os: EDeviceOs;
  deviceId: string;
  token: string;
  userId?: number | undefined;
}

export interface Devices {
  items: Device[];
  meta?: PageMeta | undefined;
}

export const DEVICE_PACKAGE_NAME = "device";
