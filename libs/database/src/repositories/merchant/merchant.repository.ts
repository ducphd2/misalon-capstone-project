import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationMeta, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { EntityRepository, FindConditions, FindManyOptions, Repository } from 'typeorm';

import { MerchantEntity } from '../../entities';
import { BaseRepository } from '../base.repository';

@EntityRepository(MerchantEntity)
export class MerchantRepository extends BaseRepository<MerchantEntity> {
  constructor(@InjectRepository(MerchantEntity) readonly merchantModel: Repository<MerchantEntity>) {
    super(merchantModel);
  }

  async findWithPaging(
    options: IPaginationOptions,
    findOptions?: FindConditions<MerchantEntity> | FindManyOptions<MerchantEntity>,
  ): Promise<Pagination<MerchantEntity, IPaginationMeta>> {
    const result = await this.paginationRepository(this.merchantModel, options, findOptions);
    return result;
  }
}
