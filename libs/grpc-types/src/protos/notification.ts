/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { EBookingStatus, ENotificationType } from "./commons";
import { NullValue } from "./google/protobuf/struct";

export const protobufPackage = "notification";

export interface Notification {
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
  senderId?: number | undefined;
  titleEn?: string | undefined;
  titleVi?: string | undefined;
  bodyEn?: string | undefined;
  bodyVi?: string | undefined;
  type?: ENotificationType | undefined;
  data_json?: string | undefined;
}

export interface CreateNotificationInput {
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
  senderId?: number | undefined;
  titleEn?: string | undefined;
  titleVi?: string | undefined;
  bodyEn?: string | undefined;
  bodyVi?: string | undefined;
  type?: ENotificationType | undefined;
  data_json?: string | undefined;
}

export interface NullableNotification {
  null?: NullValue | undefined;
  notification?: Notification | undefined;
}

export const NOTIFICATION_PACKAGE_NAME = "notification";

export interface NotificationServiceClient {
  create(request: CreateNotificationInput): Observable<Notification>;

  createBookingNotification(request: CreateNotificationInput): Observable<Notification>;
}

export interface NotificationServiceController {
  create(request: CreateNotificationInput): Promise<Notification> | Observable<Notification> | Notification;

  createBookingNotification(
    request: CreateNotificationInput,
  ): Promise<Notification> | Observable<Notification> | Notification;
}

export function NotificationServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["create", "createBookingNotification"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("NotificationService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("NotificationService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const NOTIFICATION_SERVICE_NAME = "NotificationService";
