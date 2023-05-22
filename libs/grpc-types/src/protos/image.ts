/* eslint-disable */

export const protobufPackage = "image";

export interface Image {
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
  description?: string | undefined;
}

export const IMAGE_PACKAGE_NAME = "image";
