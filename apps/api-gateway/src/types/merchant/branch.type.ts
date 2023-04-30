import { BaseType, PageMeta } from '../base';

export class Branch extends BaseType {
  name?: string;

  phone?: string;

  address?: string;

  cityCode?: number;

  districtCode?: number;

  wardCode?: number;

  merchantId?: number;

  city?: string;

  district?: string;

  ward?: string;

  latitude?: number;

  longitude?: number;
}

export class BranchPaging {
  items?: Branch[];

  meta?: PageMeta;
}
