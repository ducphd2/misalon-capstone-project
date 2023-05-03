export enum EBullQueue {
  NOTIFICATION_QUEUE = 'notification_queue',
  BOOKING_QUEUE = 'booking_queue',
  GATEWAY_QUEUE = 'gateway_queue',
}

export enum EBullEvent {
  NOTIFICATION_SEND_EMAIL_BOOKING_EVENT = 'notification_send_email_booking_event',
  APPROVE_BOOKING_NOTIFICATION_EVENT = 'approve_booking_notification_event',
}
