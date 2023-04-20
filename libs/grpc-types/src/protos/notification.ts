/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { QueryRequest } from "./commons";

export const protobufPackage = "notification";

export interface Notification {
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

export interface NotificationEdge {
  node: Notification | undefined;
  cursor: string;
}

export interface FindAllBookingsPagination {
  items: Notification[];
  page: number;
  totalPage: number;
  total: number;
  limit: number;
}

export const NOTIFICATION_PACKAGE_NAME = "notification";

export interface BookingServiceGrpcClient {
  findAll(request: QueryRequest): Observable<FindAllBookingsPagination>;
}

export interface BookingServiceGrpcController {
  findAll(
    request: QueryRequest,
  ): Promise<FindAllBookingsPagination> | Observable<FindAllBookingsPagination> | FindAllBookingsPagination;
}

export function BookingServiceGrpcControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findAll"];
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
