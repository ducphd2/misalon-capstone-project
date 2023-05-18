import { EBullQueue } from '@libs/core';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { JobOptions, Queue } from 'bull';

@Injectable()
export class BullQueueProvider {
  constructor(
    @InjectQueue(EBullQueue.NOTIFICATION_QUEUE) private notificationQueue: Queue,
    @InjectQueue(EBullQueue.GATEWAY_QUEUE) private gatewayQueue: Queue,
    @InjectQueue(EBullQueue.BOOKING_QUEUE) private bookingQueue: Queue,
    @InjectQueue(EBullQueue.USER_QUEUE) private userQueue: Queue,
  ) {}

  async addNotificationEvent<T = any>(eventName: string, eventData: T, options?: JobOptions) {
    return await this.notificationQueue.add(eventName, eventData, options);
  }

  async addGatewayEvent<T = any>(eventName: string, eventData: T, options?: JobOptions) {
    return await this.gatewayQueue.add(eventName, eventData, options);
  }

  async addBookingEvent<T = Record<string, any>>(eventName: string, eventData: T, options?: JobOptions) {
    return await this.bookingQueue.add(eventName, eventData, options);
  }

  async addUserEvent<T = Record<string, any>>(eventName: string, eventData: T, options?: JobOptions) {
    return await this.userQueue.add(eventName, eventData, options);
  }
}
