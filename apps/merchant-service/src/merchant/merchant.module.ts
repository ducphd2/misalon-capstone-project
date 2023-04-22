import { Module } from '@nestjs/common';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantEntity } from '@libs/database/entities';
import { MerchantRepository } from '@libs/database/repositories';

import { BranchModule } from '../branch/branch.module';

import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';

@Module({
  imports: [SecretsModule, TypeOrmModule.forFeature([MerchantEntity]), BranchModule],
  controllers: [MerchantController],
  providers: [MerchantService, MerchantRepository],
})
export class MerchantModule {}
