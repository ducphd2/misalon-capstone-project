import { BranchModel } from '@libs/database/entities';
import { BranchRepository } from '@libs/database/repositories';
import { Module } from '@nestjs/common';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { SequelizeModule } from '@nestjs/sequelize';

import { BranchService } from './branch.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([BranchModel])],
  providers: [BranchService, BranchRepository],
  exports: [BranchService],
})
export class BranchModule {}
