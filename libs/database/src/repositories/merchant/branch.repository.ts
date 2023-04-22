import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationMeta, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { EntityRepository, FindConditions, FindManyOptions, Repository } from 'typeorm';

import { BranchEntity } from '../../entities';
import { BaseRepository } from '../base.repository';

@EntityRepository(BranchEntity)
export class BranchRepository extends BaseRepository<BranchEntity> {
  constructor(@InjectRepository(BranchEntity) readonly branchModel: Repository<BranchEntity>) {
    super(branchModel);
  }

  async findWithPaging(
    options: IPaginationOptions,
    findOptions?: FindConditions<BranchEntity> | FindManyOptions<BranchEntity>,
  ): Promise<Pagination<BranchEntity, IPaginationMeta>> {
    const result = await this.paginationRepository(this.branchModel, options, findOptions);
    return result;
  }
}
