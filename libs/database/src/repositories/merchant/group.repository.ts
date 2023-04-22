import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { GroupEntity } from '../../entities';
import { BaseRepository } from '../base.repository';

@EntityRepository(GroupEntity)
export class GroupRepository extends BaseRepository<GroupEntity> {
  constructor(@InjectRepository(GroupEntity) readonly groupModel: Repository<GroupEntity>) {
    super(groupModel);
  }
}
