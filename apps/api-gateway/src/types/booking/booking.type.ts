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

  phone?: string;

  address?: string;

  branchId: number;

  serviceId: number;

  cityCode?: number;

  status?: EBookingStatus;

  districtCode?: number;

  wardCode?: number;

  city?: string;

  district?: string;

  ward?: string;
}

export class PartialUpdateBooking extends PartialType<CreateBookingInput>(CreateBookingInput) {}

export class BookingPaging {
  items?: Booking[];
  meta?: PageMeta;
}
