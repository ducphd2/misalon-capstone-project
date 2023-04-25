import { MerchantModel } from '@libs/database/entities';
import { MerchantRepository } from '@libs/database/repositories';
import { Module } from '@nestjs/common';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { SequelizeModule } from '@nestjs/sequelize';

import { BranchModule } from '../branch/branch.module';

import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([MerchantModel]), BranchModule],
  controllers: [MerchantController],
  providers: [MerchantService, MerchantRepository],
})
export class MerchantModule {}
