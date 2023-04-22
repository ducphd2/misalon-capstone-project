import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BranchEntity } from '../../entities';
import { BaseRepository } from '../base.repository';

@EntityRepository(BranchEntity)
export class BranchRepository extends BaseRepository<BranchEntity> {
  constructor(@InjectRepository(BranchEntity) readonly branchModel: Repository<BranchEntity>) {
    super(branchModel);
  }
}
