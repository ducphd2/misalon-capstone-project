import { GroupModel } from '@libs/database/entities';
import { GroupRepository } from '@libs/database/repositories';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';

import { GroupService } from '@/merchant-service/group/group.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([GroupModel])],
  providers: [GroupService, GroupRepository],
  exports: [GroupService],
})
export class GroupModule {}
