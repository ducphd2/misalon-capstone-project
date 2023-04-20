import { MerchantDatabaseModule } from '@libs/database/connection/merchant';
import { Module } from '@nestjs/common';
import { MerchantModule } from './merchant/merchant.module';

@Module({
  imports: [MerchantDatabaseModule, MerchantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
