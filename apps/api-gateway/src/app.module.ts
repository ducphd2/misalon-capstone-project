import { LangModule } from '@libs/modules';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './modules/user/user.module';

import { AuthModule } from '@/api-gateway/modules/auth/auth.module';
import { BookingModule } from '@/api-gateway/modules/booking/booking.module';
import { BranchModule } from '@/api-gateway/modules/branch/branch.module';
import { EventsModule } from '@/api-gateway/modules/events/events.module';
import { FeedbackModule } from '@/api-gateway/modules/feedback/feedback.module';
import { MerchantModule } from '@/api-gateway/modules/merchant/merchant.module';
import { MessagesModule } from '@/api-gateway/modules/messages/messages.module';
import { PaymentModule } from '@/api-gateway/modules/payment/payment.module';
import { ServiceModule } from '@/api-gateway/modules/service/service.module';
import { StatisticsModule } from '@/api-gateway/modules/statistics/statistics.module';
import { UploadModule } from '@/api-gateway/modules/upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LangModule,
    UploadModule,
    AuthModule,
    UserModule,
    MerchantModule,
    BranchModule,
    ServiceModule,
    BookingModule,
    EventsModule,
    PaymentModule,
    MessagesModule,
    StatisticsModule,
    FeedbackModule,
  ],
})
export class AppModule {}
