/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Count, Id, PageMeta, QueryRequest } from "./commons";
import { NullValue } from "./google/protobuf/struct";
import { User } from "./user_common";

export const protobufPackage = "payment";

export enum EPaymentStatus {
  PENDING = 0,
  FINISHED = 1,
  FAILED = 2,
}

export enum EPaymentType {
  CASH = 0,
  TRANSFER = 1,
}

export interface Payment {
  /** default field */
  id: number;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  deletedAt?: string | undefined;
  createdBy?: number | undefined;
  updatedBy?: number | undefined;
  deletedBy?:
    | number
    | undefined;
  /** reserved field */
  status?: EPaymentStatus | undefined;
  type?: EPaymentType | undefined;
  userId?: number | undefined;
  serviceId?: number | undefined;
  bookingId?: number | undefined;
  merchantId?: number | undefined;
  branchId?: number | undefined;
  totalPrice?: number | undefined;
  vnpUrl?: string | undefined;
  creator?: User | undefined;
  updater?: User | undefined;
  user?: User | undefined;
}

export interface CreatePaymentInput {
  type?: EPaymentType | undefined;
  userId?: number | undefined;
  createdBy?: number | undefined;
  bookingIds: number[];
  merchantId?: number | undefined;
  branchId?: number | undefined;
  totalPrice?: number | undefined;
  ip?: string | undefined;
}

export interface UpdatePaymentData {
  status?: EPaymentType | undefined;
  type?: EPaymentType | undefined;
  userId?: number | undefined;
  serviceId?: number | undefined;
  bookingId?: number | undefined;
  merchantId?: number | undefined;
  branchId?: number | undefined;
  totalPrice?: number | undefined;
  ip?: string | undefined;
}

export interface UpdatePaymentInput {
  id: number;
  data: UpdatePaymentData | undefined;
}

export interface NullablePayment {
  null?: NullValue | undefined;
  payment?: Payment | undefined;
}

export interface PaymentPagination {
  items: Payment[];
  meta?: PageMeta | undefined;
}

export interface CallbackQuery {
  query: string;
  body: string;
}

export interface Payments {
  items: Payment[];
}

export const PAYMENT_PACKAGE_NAME = "payment";

export interface PaymentServiceClient {
  find(request: QueryRequest): Observable<PaymentPagination>;

  findAll(request: QueryRequest): Observable<Payments>;

  findById(request: Id): Observable<NullablePayment>;

  findOne(request: QueryRequest): Observable<NullablePayment>;

  count(request: QueryRequest): Observable<Count>;

  create(request: CreatePaymentInput): Observable<Payment>;

  callback(request: CallbackQuery): Observable<Payment>;

  update(request: UpdatePaymentInput): Observable<Payment>;

  delete(request: Id): Observable<Count>;
}

export interface PaymentServiceController {
  find(request: QueryRequest): Promise<PaymentPagination> | Observable<PaymentPagination> | PaymentPagination;

  findAll(request: QueryRequest): Promise<Payments> | Observable<Payments> | Payments;

  findById(request: Id): Promise<NullablePayment> | Observable<NullablePayment> | NullablePayment;

  findOne(request: QueryRequest): Promise<NullablePayment> | Observable<NullablePayment> | NullablePayment;

  count(request: QueryRequest): Promise<Count> | Observable<Count> | Count;

  create(request: CreatePaymentInput): Promise<Payment> | Observable<Payment> | Payment;

  callback(request: CallbackQuery): Promise<Payment> | Observable<Payment> | Payment;

  update(request: UpdatePaymentInput): Promise<Payment> | Observable<Payment> | Payment;

  delete(request: Id): Promise<Count> | Observable<Count> | Count;
}

export function PaymentServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "find",
      "findAll",
      "findById",
      "findOne",
      "count",
      "create",
      "callback",
      "update",
      "delete",
    ];
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
