import { MerchantUserEntity } from '@libs/database/entities';
import { MerchantUserRepository } from '@libs/database/repositories';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretsModule } from 'libs/modules/global/secrets/module';

import { MerchantUserService } from './merchant-user.service';

@Module({
  imports: [SecretsModule, TypeOrmModule.forFeature([MerchantUserEntity])],
  providers: [MerchantUserService, MerchantUserRepository],
  exports: [MerchantUserService],
})
export class MerchantUserModule {}
