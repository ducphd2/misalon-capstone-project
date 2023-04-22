import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationMeta, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { EntityRepository, FindConditions, FindManyOptions, Repository } from 'typeorm';

import { DeviceEntity } from '../../entities';
import { BaseRepository } from '../base.repository';

@EntityRepository(DeviceEntity)
export class DeviceRepository extends BaseRepository<DeviceEntity> {
  constructor(@InjectRepository(DeviceEntity) readonly deviceModel: Repository<DeviceEntity>) {
    super(deviceModel);
  }

  async findWithPaging(
    options: IPaginationOptions,
    findOptions?: FindConditions<DeviceEntity> | FindManyOptions<DeviceEntity>,
  ): Promise<Pagination<DeviceEntity, IPaginationMeta>> {
    const result = await this.paginationRepository(this.deviceModel, options, findOptions);
    return result;
  }
}
