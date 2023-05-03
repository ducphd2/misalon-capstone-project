export enum ESortDirection {
  ASC = 0,
  DESC = 1,
}

export enum EServiceShowType {
  BOTH = 0,
  CASHIER = 1,
  BOOKING = 2,
  NONE = 3,
}

export enum EServiceType {
  SERVICE = 0,
  PRODUCT = 1,
}

export enum EServeImageType {
  MERCHANT = 0,
  BRANCH = 1,
  GROUP = 2,
  SERVICE = 3,
}

export enum EImageType {
  PHOTO = 0,
  VIDEO = 1,
}

export enum EDeviceOs {
  ANDROID = 0,
  IOS = 1,
}

export enum EUserGender {
  MALE = 0,
  FEMALE = 1,
  OTHER = 2,
}

export enum EUserRole {
  USER = 0,
  ADMIN = 1,
  SUPER_ADMIN = 2,
  MASTER_WORKER = 3,
  ASSISTANT_WORKER = 4,
  MANAGER = 5,
  RECEPTIONIST = 6,
}

export enum ECustomerLevel {
  NORMAL = 0,
  SILVER = 1,
  GOLD = 2,
  PLATINUM = 3,
}

export enum EUserStatus {
  PENDING = 0,
  ACTIVE = 1,
  BANNED = 2,
}

export enum EBookingStatus {
  BOOKING_PENDING = 0,
  BOOKING_APPROVE = 1,
  BOOKING_CANCELLED = 2,
  BOOKING_REJECT = 3,
}

export enum EEventMessage {
  CREATE_MESSAGE = 'create_message',
  RECENT_MESSAGES = 'recent_messages',
  CONVERSATION_MESSAGES = 'conversation_messages',
  JOIN_ROOM = 'join_room',
  NEW_MESSAGE = 'new_message',
}

export enum ENotificationType {
  BOOKING = 0,
  CHAT = 1,
  COMMENT = 2,
  REPLY_COMMENT = 3,
}

export enum ELangType {
  VI = 'vi',
  EN = 'en',
}

export enum ELangNumber {
  VI = 0,
  EN = 1,
}
