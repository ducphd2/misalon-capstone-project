import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { ServiceModel } from '../../entities';
import { BaseRepository } from '../base.repository';

@Injectable()
export class ServiceRepository extends BaseRepository<ServiceModel> {
  constructor(@InjectModel(ServiceModel) readonly model: typeof ServiceModel) {
    super(model);
  }
}
