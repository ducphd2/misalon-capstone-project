import { BaseType } from '../base';

import { EServiceShowType, EServiceType } from '@/api-gateway/dtos/common';

export class Service extends BaseType {
  merchantId?: number;

  groupId?: number;

  price?: number;

  initialPrice?: number;

  capitalPrice?: number;

  durationHour?: number;

  durationMinute?: number;

  sku?: string;

  code?: string;

  name?: string;

  description?: string;

  image?: string;

  type?: EServiceType;

  showType?: EServiceShowType;

  canPrintableInvoice?: boolean;
}

export class CreateServiceInput {
  merchantId?: number;

  groupId?: number;

  price?: number;

  initialPrice?: number;

  capitalPrice?: number;

  durationHour?: number;

  durationMinute?: number;

  sku?: string;

  code?: string;

  name?: string;

  description?: string;

  image?: string;

  type?: EServiceType;

  showType?: EServiceShowType;

  canPrintableInvoice?: boolean;
}
