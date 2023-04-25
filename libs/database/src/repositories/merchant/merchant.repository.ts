import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { MerchantModel } from '../../entities';
import { BaseRepository } from '../base.repository';

@Injectable()
export class MerchantRepository extends BaseRepository<MerchantModel> {
  constructor(@InjectModel(MerchantModel) readonly model: typeof MerchantModel) {
    super(model);
  }

  async findWithPaging(options?: any, findOptions?: any): Promise<MerchantModel> {
    // const result = await this.paginationRepository(this.deviceModel, options, findOptions);
    return;
  }
}
