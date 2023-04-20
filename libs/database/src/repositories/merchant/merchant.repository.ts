import { EntityRepository, Repository } from 'typeorm';
import { MerchantEntity } from '../../entities';

@EntityRepository(MerchantEntity)
export class MerchantRepository extends Repository<MerchantEntity> {}
