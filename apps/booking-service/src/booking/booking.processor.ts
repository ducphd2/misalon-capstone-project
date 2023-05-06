import { EBullEvent, EBullQueue } from '@libs/core';
import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Logger, OnModuleInit } from '@nestjs/common';
import { Job } from 'bull';
import { omit } from 'lodash';

import { BookingService } from './booking.service';

@Processor(EBullQueue.BOOKING_QUEUE)
export class BookingProcessor implements OnModuleInit {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly bookingService: BookingService) {}

  onModuleInit() {
    this.logger.log('booking processor init');
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.log(`Processing job ${job.id} of type ${job.name}. Data: ${JSON.stringify(job.data)}`);
  }

  @OnQueueCompleted()
  onComplete(job: Job, result: any) {
    this.logger.log(`Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(result)}`);
  }

  @OnQueueFailed()
  onError(job: Job<any>, error: any) {
    this.logger.error(`Failed job ${job.id} of type ${job.name}: ${error.message}`, error.stack);
  }

  @Process(EBullEvent.MAKE_PAYMENT_BOOKING)
  async handlePaymentPendingBookingEvent(job: Job<any>) {
    const request = job.data;
    await this.bookingService.update({
      id: request.id,
      data: omit(request, ['id']),
    });
  }
}
