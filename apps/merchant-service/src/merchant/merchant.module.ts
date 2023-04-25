import { MerchantModel } from '@libs/database/entities';
import { MerchantRepository } from '@libs/database/repositories';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';

import { BranchModule } from '../branch/branch.module';
import { GroupModule } from '../group/group.module';
import { ServicesModule } from '../service/service.module';

import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([MerchantModel]), BranchModule, GroupModule, ServicesModule],
  controllers: [MerchantController],
  providers: [MerchantService, MerchantRepository],
})
export class MerchantModule {}
