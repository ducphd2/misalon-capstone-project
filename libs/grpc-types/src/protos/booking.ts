/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Count, GqlQuery, Id, QueryRequest } from "./commons";
import { NullValue } from "./google/protobuf/struct";

export const protobufPackage = "booking";

export enum EBookingStatus {
  PENDING = 0,
  APPROVE = 1,
  CANCELLED = 2,
  REJECT = 3,
}

export interface Booking {
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
  status?: EBookingStatus | undefined;
  userId?: number | undefined;
  serviceId?: number | undefined;
  startTime?: string | undefined;
  endTime?: string | undefined;
  duration?: number | undefined;
  note?: string | undefined;
  merchantId?: number | undefined;
  branchId?: number | undefined;
  isCustomerCancel?: boolean | undefined;
  cancelReason?: string | undefined;
  bookingDate?: string | undefined;
  isAdminUpdate?: boolean | undefined;
  adminUpdateId?: number | undefined;
  serviceName?: string | undefined;
  customerName?: string | undefined;
  customerEmail?: string | undefined;
  customerAddress?: string | undefined;
  durationHour?: number | undefined;
  durationMinute?: number | undefined;
}

export interface CreateBookingInput {
  status?: EBookingStatus | undefined;
  userId?: number | undefined;
  serviceId?: number | undefined;
  startTime?: string | undefined;
  endTime?: string | undefined;
  adminBranchEmail?: string | undefined;
  customerEmail?: string | undefined;
  customerName?: string | undefined;
  bookingDate?: string | undefined;
  note?: string | undefined;
  merchantId?: number | undefined;
  branchId?: number | undefined;
  serviceName?: string | undefined;
}

export interface UpdateBookingData {
  status?: EBookingStatus | undefined;
  userId?: number | undefined;
  serviceId?: number | undefined;
  startTime?: string | undefined;
  endTime?: string | undefined;
  adminBranchEmail?: string | undefined;
  customerEmail?: string | undefined;
  customerName?: string | undefined;
  bookingDate?: string | undefined;
  note?: string | undefined;
  merchantId?: number | undefined;
  branchId?: number | undefined;
  serviceName?: string | undefined;
}

export interface UpdateBookingInput {
  id: number;
  data: UpdateBookingData | undefined;
}

export interface FindBookingOffsetPagination {
  items: Booking[];
  page?: number | undefined;
  totalPage?: number | undefined;
  total?: number | undefined;
  limit?: number | undefined;
}

export interface NullableBooking {
  null?: NullValue | undefined;
  booking?: Booking | undefined;
}

export const BOOKING_PACKAGE_NAME = "booking";

export interface BookingServiceClient {
  find(request: QueryRequest): Observable<FindBookingOffsetPagination>;

  findById(request: Id): Observable<NullableBooking>;

  findOne(request: GqlQuery): Observable<NullableBooking>;

  count(request: GqlQuery): Observable<Count>;

  create(request: CreateBookingInput): Observable<Booking>;

  customerCreate(request: CreateBookingInput): Observable<Booking>;

  update(request: UpdateBookingInput): Observable<Booking>;

  delete(request: Id): Observable<Count>;
}

export interface BookingServiceController {
  find(
    request: QueryRequest,
  ): Promise<FindBookingOffsetPagination> | Observable<FindBookingOffsetPagination> | FindBookingOffsetPagination;

  findById(request: Id): Promise<NullableBooking> | Observable<NullableBooking> | NullableBooking;

  findOne(request: GqlQuery): Promise<NullableBooking> | Observable<NullableBooking> | NullableBooking;

  count(request: GqlQuery): Promise<Count> | Observable<Count> | Count;

  create(request: CreateBookingInput): Promise<Booking> | Observable<Booking> | Booking;

  customerCreate(request: CreateBookingInput): Promise<Booking> | Observable<Booking> | Booking;

  update(request: UpdateBookingInput): Promise<Booking> | Observable<Booking> | Booking;

  delete(request: Id): Promise<Count> | Observable<Count> | Count;
}

export function BookingServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "find",
      "findById",
      "findOne",
      "count",
      "create",
      "customerCreate",
      "update",
      "delete",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("BookingService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("BookingService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const BOOKING_SERVICE_NAME = "BookingService";
