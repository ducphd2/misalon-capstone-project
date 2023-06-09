import { EBullEvent, EBullQueue } from '@libs/core';
import {
  BookingRepository,
  BookingServiceRepository,
  BranchRepository,
  BranchUserRepository,
  PaymentRepository,
} from '@libs/database';
import { EBookingStatus } from '@libs/grpc-types/protos/commons';
import { EPaymentStatus } from '@libs/grpc-types/protos/payment';
import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Logger, OnModuleInit } from '@nestjs/common';
import { Job } from 'bull';
import { omit } from 'lodash';

import { BookingService } from './booking.service';

@Processor(EBullQueue.BOOKING_QUEUE)
export class BookingProcessor implements OnModuleInit {
  private readonly logger = new Logger(this.constructor.name);

  constructor(
    private readonly bookingService: BookingService,
    private readonly bookingServiceRepository: BookingServiceRepository,
    private readonly branchRepository: BranchRepository,
    private readonly bookingRepository: BookingRepository,
    private readonly branchUserRepository: BranchUserRepository,
    private readonly paymentRepository: PaymentRepository,
  ) {}

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
    await Promise.all(
      request.bookingIds.map((bookingId: number) => {
        this.bookingService.update({
          id: bookingId,
          data: omit(request, ['bookingIds']) as any,
        });
      }),
    );
  }

  @Process(EBullEvent.BS_INSERT_BOOKING_SERVICES_DATA)
  async handleInserBookingServices(job: Job<any>) {
    const { serviceIds, bookingId, branchId, userId = null } = job.data;

    const branch = await this.branchRepository.findById(branchId);

    await this.bookingRepository.update(
      { merchantId: branch.merchantId },
      {
        where: {
          id: bookingId,
        },
      },
    );

    const existedCustomer = await this.branchUserRepository.findOne({
      where: {
        userId,
        merchantId: branch.merchantId,
      },
    });

    if (!existedCustomer) {
      await this.branchUserRepository.create({
        branchId,
        userId,
        merchantId: branch.merchantId,
      });
    }
  }

  @Process(EBullEvent.UPDATE_VNPAY_BOOKINGS)
  async handlePaymentResultEvent(job: Job<any>) {
    const { status, code } = job.data;

    const payment = await this.paymentRepository.findOne({
      where: {
        code,
      },
    });

    await this.bookingRepository.update(
      {
        status,
      },
      {
        where: {
          paymentId: payment.id,
        },
      },
    );
  }

  @Process(EBullEvent.WAIT_FOR_MAKE_PAYMENT_BOOKING)
  async handleWaitingForPaymentBooking(job: Job<any>) {
    const { paymentId, bookingIds } = job.data;

    const payment = await this.paymentRepository.findOne({
      where: {
        id: paymentId,
      },
    });

    if (payment.status !== EPaymentStatus.FINISHED) {
      await this.paymentRepository.update(
        {
          status: EPaymentStatus.FAILED,
        },
        { where: { id: paymentId } },
      );

      await Promise.all(
        bookingIds.map((bookingId: number) => {
          this.bookingRepository.update(
            {
              status: EBookingStatus.BOOKING_PAYMENT_FAILED,
            },
            {
              where: {
                id: bookingId,
              },
            },
          );
        }),
      );
      return false;
    }
    return true;
  }
}
