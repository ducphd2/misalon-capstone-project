import { FeedbackModel, FeedbackRepository } from '@libs/database';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { FeedbackService } from './feedback.service';

@Module({
  imports: [SequelizeModule.forFeature([FeedbackModel])],
  providers: [FeedbackService, FeedbackRepository],
  exports: [FeedbackService],
})
export class FeedbackModule {}
