import { BaseType, PageMeta } from '../base';

export class Group extends BaseType {
  merchantId?: number;

  sku?: string;

  code?: string;

  name?: string;

  description?: string;

  image?: string;
}

export class GroupPaging {
  items?: Group[];

  meta?: PageMeta;
}
