/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Count, EBookingStatus, Id, PageMeta, QueryRequest } from "./commons";
import { NullValue } from "./google/protobuf/struct";
import { User } from "./user_common";

export const protobufPackage = "booking";

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
  user?: User | undefined;
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

export interface NullableBooking {
  null?: NullValue | undefined;
  booking?: Booking | undefined;
}

export interface BookingPagination {
  items: Booking[];
  meta?: PageMeta | undefined;
}

export interface Bookings {
  items: Booking[];
}

export const BOOKING_PACKAGE_NAME = "booking";

export interface BookingServiceClient {
  find(request: QueryRequest): Observable<BookingPagination>;

  findAll(request: QueryRequest): Observable<Bookings>;

  findById(request: Id): Observable<NullableBooking>;

  findOne(request: QueryRequest): Observable<NullableBooking>;

  count(request: QueryRequest): Observable<Count>;

  create(request: CreateBookingInput): Observable<Booking>;

  update(request: UpdateBookingInput): Observable<Booking>;

  delete(request: Id): Observable<Count>;
}

export interface BookingServiceController {
  find(request: QueryRequest): Promise<BookingPagination> | Observable<BookingPagination> | BookingPagination;

  findAll(request: QueryRequest): Promise<Bookings> | Observable<Bookings> | Bookings;

  findById(request: Id): Promise<NullableBooking> | Observable<NullableBooking> | NullableBooking;

  findOne(request: QueryRequest): Promise<NullableBooking> | Observable<NullableBooking> | NullableBooking;

  count(request: QueryRequest): Promise<Count> | Observable<Count> | Count;

  create(request: CreateBookingInput): Promise<Booking> | Observable<Booking> | Booking;

  update(request: UpdateBookingInput): Promise<Booking> | Observable<Booking> | Booking;

  delete(request: Id): Promise<Count> | Observable<Count> | Count;
}

export function BookingServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["find", "findAll", "findById", "findOne", "count", "create", "update", "delete"];
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
