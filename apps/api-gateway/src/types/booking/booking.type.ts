import { UpdateBookingData } from '@libs/grpc-types/protos/booking';
import { Field, InputType, Int, ObjectType, PartialType } from '@nestjs/graphql';

import { EBookingStatus } from '@/api-gateway/dtos/common';
import { BaseType, ErrorPayload } from '@/api-gateway/types/base';

@ObjectType()
export class Booking extends BaseType {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => Int, { nullable: true })
  cityCode?: number;

  @Field(() => Int, { nullable: true })
  districtCode?: number;

  @Field(() => Int, { nullable: true })
  wardCode?: number;

  @Field(() => Int, { nullable: true })
  merchantId?: number;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  district?: string;

  @Field(() => String, { nullable: true })
  ward?: string;
}

@InputType()
export class CreateBookingInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => Int, { nullable: true })
  branchId: number;

  @Field(() => Int, { nullable: true })
  serviceId: number;

  @Field(() => Int, { nullable: true })
  cityCode?: number;

  @Field(() => EBookingStatus, { nullable: true, defaultValue: EBookingStatus.PENDING })
  status?: EBookingStatus;

  @Field(() => Int, { nullable: true })
  districtCode?: number;

  @Field(() => Int, { nullable: true })
  wardCode?: number;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  district?: string;

  @Field(() => String, { nullable: true })
  ward?: string;
}

@InputType()
export class PartialUpdateBooking
  extends PartialType<CreateBookingInput>(CreateBookingInput)
  implements UpdateBookingData {}

@ObjectType()
export class BookingPayload {
  @Field(() => [ErrorPayload], { nullable: true })
  errors?: ErrorPayload[];

  @Field(() => Booking, { nullable: true })
  booking?: Booking;
}

@ObjectType()
export class DeleteBookingPayload {
  @Field(() => [ErrorPayload], { nullable: true })
  errors?: ErrorPayload[];

  @Field(() => Int, { nullable: true })
  count?: number;
}

@ObjectType()
export class ExtendResponseBooking extends Booking {
  @Field({ nullable: true })
  customerEmail?: string;

  @Field({ nullable: true })
  customerName?: string;

  @Field({ nullable: true })
  customerAddress?: string;
}

@ObjectType()
export class BookingPaginationResponse {
  @Field(() => [ExtendResponseBooking], { nullable: true })
  items: ExtendResponseBooking[];

  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  totalPage?: number;

  @Field(() => Int, { nullable: true })
  total?: number;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
