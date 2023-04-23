import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationMeta, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { EntityRepository, FindConditions, FindManyOptions, Repository } from 'typeorm';

import { MerchantUserEntity } from '../../entities';
import { BaseRepository } from '../base.repository';

@EntityRepository(MerchantUserEntity)
export class MerchantUserRepository extends BaseRepository<MerchantUserEntity> {
  constructor(@InjectRepository(MerchantUserEntity) readonly merchantUserModel: Repository<MerchantUserEntity>) {
    super(merchantUserModel);
  }

  async findWithPaging(
    options: IPaginationOptions,
    findOptions?: FindConditions<MerchantUserEntity> | FindManyOptions<MerchantUserEntity>,
  ): Promise<Pagination<MerchantUserEntity, IPaginationMeta>> {
    const result = await this.paginationRepository(this.merchantUserModel, options, findOptions);
    return result;
  }
}
