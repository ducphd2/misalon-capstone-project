import { EntityRepository, Repository } from 'typeorm';
import { BranchEntity } from '../../entities';

@EntityRepository(BranchEntity)
export class BranchRepository extends Repository<BranchEntity> {}
