import { Module } from '@nestjs/common';
import { MessageComponent } from '@libs/modules';

import { MerchantCommonModule } from '../merchant-common/merchant-common.module';

import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';

@Module({
  imports: [MerchantCommonModule],
  providers: [FeedbackService, MessageComponent],
  controllers: [FeedbackController],
})
export class FeedbackModule {}
