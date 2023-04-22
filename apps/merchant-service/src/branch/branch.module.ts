import { BranchEntity } from '@libs/database/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { BranchRepository } from '@libs/database/repositories';

import { BranchService } from './branch.service';

@Module({
  imports: [SecretsModule, TypeOrmModule.forFeature([BranchEntity])],
  providers: [BranchService, BranchRepository],
  exports: [BranchService],
})
export class BranchModule {}
