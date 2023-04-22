import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BaseRepository } from '../base.repository';
import { DeviceEntity } from '../../entities';

@EntityRepository(DeviceEntity)
export class DeviceRepository extends BaseRepository<DeviceEntity> {
  constructor(@InjectRepository(DeviceEntity) readonly deviceModel: Repository<DeviceEntity>) {
    super(deviceModel);
  }
}
