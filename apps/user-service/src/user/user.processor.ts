import { EBullEvent, EBullQueue } from '@libs/core';
import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Logger, OnModuleInit } from '@nestjs/common';
import { Job } from 'bull';

import { UserService } from './user.service';

@Processor(EBullQueue.USER_QUEUE)
export class UserProcessor implements OnModuleInit {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly userService: UserService) {}

  onModuleInit() {
    this.logger.log('user processor init');
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

  @Process(EBullEvent.UPDATE_ADMIN_REGISTER)
  async handleUpdateAdminInfoEvent(job: Job<any>) {
    const request = job.data;
    await this.userService.update({
      id: request.userId,
      data: {
        merchantId: request.merchantId,
        branchId: request.branchId,
      },
    });
  }
}
