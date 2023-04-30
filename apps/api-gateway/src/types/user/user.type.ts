import { PartialType } from '@nestjs/mapped-types';

import { BaseType, PageMeta } from './../base';

import { CreateUserInputDto } from '@/api-gateway/dtos';
import { ECustomerLevel, EUserGender, EUserRole, EUserStatus } from '@/api-gateway/dtos/common';
import { Merchant } from '@/api-gateway/types/merchant';
import { DevicePaging } from '@/api-gateway/types/user/device.type';

export class User extends BaseType {
  email?: string;

  password?: string;

  fullName?: string;

  status?: EUserStatus;

  role?: EUserRole;

  gender?: EUserGender;

  level?: ECustomerLevel;

  contact?: string;

  dobDay?: number;

  dobMonth?: number;

  dobYear?: number;

  occupation?: string;

  avatar?: string;

  address?: string;

  cityCode?: number;

  districtCode?: number;

  wardCode?: number;

  phoneNumber?: string;

  referrer?: string;

  referrerCode?: string;

  customerCode?: string;

  facebook?: string;

  zaloPhone?: string;

  height?: number;

  weight?: number;

  memberCardNo?: string;

  company?: string;

  taxNo?: string;

  note?: string;

  relatedUser?: string;

  relatedUserRole?: string;

  relatedUserPhone?: string;

  branchId?: number;

  latitude?: number;

  longitude?: number;

  merchants?: Merchant[];

  devices?: DevicePaging;
}
export class UpdatePartialUser extends PartialType<CreateUserInputDto>(CreateUserInputDto) {}

export class UserPaging {
  items?: User[];
  meta?: PageMeta;
}
