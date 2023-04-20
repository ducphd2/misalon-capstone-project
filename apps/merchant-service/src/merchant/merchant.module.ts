import { Module } from '@nestjs/common';
import { MerchantController } from './controller/merchant.controller';
import { MerchantService } from './service/merchant.service';
import { SecretsModule } from 'libs/modules/global/secrets/module';

@Module({
  imports: [SecretsModule],
  controllers: [MerchantController],
  providers: [MerchantService],
})
export class MerchantModule {}
