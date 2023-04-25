import { MerchantUserModel } from '@libs/database/entities';
import { MerchantUserRepository } from '@libs/database/repositories';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';

import { MerchantUserService } from './merchant-user.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([MerchantUserModel])],
  providers: [MerchantUserService, MerchantUserRepository],
  exports: [MerchantUserService],
})
export class MerchantUserModule {}
