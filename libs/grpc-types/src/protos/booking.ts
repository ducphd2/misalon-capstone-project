/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Count, GqlQuery, Id, PageInfo, QueryRequest } from "./commons";

export const protobufPackage = "booking";

export interface Booking {
  id: number;
  status: string;
  customerId: number;
  branchServiceId: number;
  startTime: string;
  endTime: string;
  duration: number;
  createdAt: string;
  updatedAt: string;
  note?: string | undefined;
  merchantId: number;
  branchId: number;
  isCustomerCancel?: boolean | undefined;
  cancelReason?: string | undefined;
  bookingDate: string;
  isAdminUpdate?: boolean | undefined;
  adminUpdateId?: number | undefined;
  serviceName?: string | undefined;
  customerName?: string | undefined;
  customerEmail?: string | undefined;
  customerAddress?: string | undefined;
}

export interface BookingEdge {
  node: Booking | undefined;
  cursor: string;
}

export interface CreateBookingInput {
  status: string;
  customerId: number;
  branchServiceId: number;
  startTime: string;
  endTime: string;
  adminBranchEmail: string;
  customerEmail: string;
  customerName: string;
  bookingDate: string;
  note?: string | undefined;
  merchantId: number;
  branchId: number;
  serviceName: string;
}

export interface UpdateBookingInput {
  id: string;
  data: Booking | undefined;
}

export interface FindBookingsPayload {
  edges: BookingEdge[];
  pageInfo: PageInfo | undefined;
}

export interface FindOneCustomerPayload {
  booking: Booking | undefined;
}

export interface FindAllBookingsPagination {
  items: Booking[];
  page: number;
  totalPage: number;
  total: number;
  limit: number;
}

export const BOOKING_PACKAGE_NAME = "booking";

export interface BookingServiceGrpcClient {
  find(request: GqlQuery): Observable<FindBookingsPayload>;

  findAll(request: QueryRequest): Observable<FindAllBookingsPagination>;

  findById(request: Id): Observable<Booking>;

  findOne(request: GqlQuery): Observable<Booking>;

  count(request: GqlQuery): Observable<Count>;

  create(request: CreateBookingInput): Observable<Booking>;

  customerCreate(request: CreateBookingInput): Observable<Booking>;

  update(request: UpdateBookingInput): Observable<Booking>;

  destroy(request: GqlQuery): Observable<Count>;
}

export interface BookingServiceGrpcController {
  find(request: GqlQuery): Promise<FindBookingsPayload> | Observable<FindBookingsPayload> | FindBookingsPayload;

  findAll(
    request: QueryRequest,
  ): Promise<FindAllBookingsPagination> | Observable<FindAllBookingsPagination> | FindAllBookingsPagination;

  findById(request: Id): Promise<Booking> | Observable<Booking> | Booking;

  findOne(request: GqlQuery): Promise<Booking> | Observable<Booking> | Booking;

  count(request: GqlQuery): Promise<Count> | Observable<Count> | Count;

  create(request: CreateBookingInput): Promise<Booking> | Observable<Booking> | Booking;

  customerCreate(request: CreateBookingInput): Promise<Booking> | Observable<Booking> | Booking;

  update(request: UpdateBookingInput): Promise<Booking> | Observable<Booking> | Booking;

  destroy(request: GqlQuery): Promise<Count> | Observable<Count> | Count;
}

export function BookingServiceGrpcControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "find",
      "findAll",
      "findById",
      "findOne",
      "count",
      "create",
      "customerCreate",
      "update",
      "destroy",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("BookingServiceGrpc", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("BookingServiceGrpc", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const BOOKING_SERVICE_GRPC_SERVICE_NAME = "BookingServiceGrpc";
