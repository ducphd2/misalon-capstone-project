import { CreateInput } from '@libs/grpc-types/protos/merchant';

import { Branch } from './branch.type';

import { BaseType, PageMeta } from '@/api-gateway/types/base';

export class Merchant extends BaseType {
  name?: string;

  phone?: string;

  address?: string;

  cityCode?: number;

  districtCode?: number;

  wardCode?: number;

  userId?: number;

  branches?: Branch[];
}

export class CreateMerchantInput implements CreateInput {
  name?: string;

  phone?: string;

  address?: string;

  cityCode?: number;

  districtCode?: number;

  wardCode?: number;

  city?: string;

  district?: string;

  ward?: string;
}

export class MerchantPaging {
  items?: Merchant[];

  meta?: PageMeta;
}
