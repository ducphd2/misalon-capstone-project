/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Count, EBookingStatus, Id, PageMeta, QueryRequest } from "./commons";
import { NullValue } from "./google/protobuf/struct";

export const protobufPackage = "payment";

export interface Payment {
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

export interface CreatePaymentInput {
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

export interface UpdatePaymentData {
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

export interface UpdatePaymentInput {
  id: number;
  data: UpdatePaymentData | undefined;
}

export interface NullablePayment {
  null?: NullValue | undefined;
  booking?: Payment | undefined;
}

export interface PaymentPagination {
  items: Payment[];
  meta?: PageMeta | undefined;
}

export const PAYMENT_PACKAGE_NAME = "payment";

export interface PaymentServiceClient {
  find(request: QueryRequest): Observable<PaymentPagination>;

  findById(request: Id): Observable<NullablePayment>;

  findOne(request: QueryRequest): Observable<NullablePayment>;

  count(request: QueryRequest): Observable<Count>;

  create(request: CreatePaymentInput): Observable<Payment>;

  update(request: UpdatePaymentInput): Observable<Payment>;

  delete(request: Id): Observable<Count>;
}

export interface PaymentServiceController {
  find(request: QueryRequest): Promise<PaymentPagination> | Observable<PaymentPagination> | PaymentPagination;

  findById(request: Id): Promise<NullablePayment> | Observable<NullablePayment> | NullablePayment;

  findOne(request: QueryRequest): Promise<NullablePayment> | Observable<NullablePayment> | NullablePayment;

  count(request: QueryRequest): Promise<Count> | Observable<Count> | Count;

  create(request: CreatePaymentInput): Promise<Payment> | Observable<Payment> | Payment;

  update(request: UpdatePaymentInput): Promise<Payment> | Observable<Payment> | Payment;

  delete(request: Id): Promise<Count> | Observable<Count> | Count;
}

export function PaymentServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["find", "findById", "findOne", "count", "create", "update", "delete"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("PaymentService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("PaymentService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PAYMENT_SERVICE_NAME = "PaymentService";
