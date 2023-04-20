import { EntityRepository, Repository } from 'typeorm';
import { ServiceEntity } from '../../entities';

@EntityRepository(ServiceEntity)
export class ServiceRepository extends Repository<ServiceEntity> {}
