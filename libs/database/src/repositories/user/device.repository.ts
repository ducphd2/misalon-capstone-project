import { EntityRepository, Repository } from 'typeorm';
import { DeviceEntity } from '../../entities';

@EntityRepository(DeviceEntity)
export class DeviceRepository extends Repository<DeviceEntity> {}
