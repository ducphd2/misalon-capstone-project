import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ServiceEntity } from '../../entities';
import { BaseRepository } from '../base.repository';

@EntityRepository(ServiceEntity)
export class ServiceRepository extends BaseRepository<ServiceEntity> {
  constructor(@InjectRepository(ServiceEntity) readonly serviceModel: Repository<ServiceEntity>) {
    super(serviceModel);
  }
}
