import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { MerchantEntity } from '../../entities';
import { BaseRepository } from '../base.repository';

@EntityRepository(MerchantEntity)
export class MerchantRepository extends BaseRepository<MerchantEntity> {
  constructor(@InjectRepository(MerchantEntity) readonly merchantModel: Repository<MerchantEntity>) {
    super(merchantModel);
  }
}
