/* eslint-disable */

export const protobufPackage = "serve_image";

export enum EServeImageType {
  MERCHANT = 0,
  BRANCH = 1,
  GROUP = 2,
  SERVICE = 3,
}

export enum EImageType {
  PHOTO = 0,
  VIDEO = 1,
}

export interface ServiceImage {
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
  serveType: EServeImageType;
  imageId: number;
  type: EImageType;
}

export const SERVE_IMAGE_PACKAGE_NAME = "serve_image";
