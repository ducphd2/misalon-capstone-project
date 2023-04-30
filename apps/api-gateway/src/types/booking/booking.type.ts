import { PartialType } from '@nestjs/mapped-types';

import { BaseType, PageMeta } from '../base';

import { EBookingStatus } from '@/api-gateway/dtos/common';

export class Booking extends BaseType {
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
}

export class CreateBookingInput {
  name?: string;

  email?: string;

  phone?: string;

  address?: string;

  merchantId: number;

  branchId: number;

  serviceId: number;

  status?: EBookingStatus;

  userId?: number;

  duration?: number;

  startTime?: string;

  endTime?: string;
}

export class BookingPaging {
  items?: Booking[];
  meta?: PageMeta;
}
