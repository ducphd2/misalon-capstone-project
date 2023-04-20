import { EntityRepository, Repository } from 'typeorm';
import { GroupEntity } from '../../entities';

@EntityRepository(GroupEntity)
export class GroupRepository extends Repository<GroupEntity> {}
