import { LangModule } from '@libs/modules';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './modules/user/user.module';

import { AuthModule } from '@/api-gateway/modules/auth/auth.module';
import { BookingModule } from '@/api-gateway/modules/booking/booking.module';
import { BranchModule } from '@/api-gateway/modules/branch/branch.module';
import { EventsModule } from '@/api-gateway/modules/events/events.module';
import { GroupModule } from '@/api-gateway/modules/group/group.module';
import { MerchantModule } from '@/api-gateway/modules/merchant/merchant.module';
import { PaymentModule } from '@/api-gateway/modules/payment/payment.module';
import { ServiceModule } from '@/api-gateway/modules/service/service.module';
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
    GroupModule,
    ServiceModule,
    BookingModule,
    EventsModule,
    PaymentModule,
  ],
})
export class AppModule {}
