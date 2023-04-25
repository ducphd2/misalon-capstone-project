import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { MerchantUserModel } from '../../entities';
import { BaseRepository } from '../base.repository';

@Injectable()
export class MerchantUserRepository extends BaseRepository<MerchantUserModel> {
  constructor(@InjectModel(MerchantUserModel) readonly model: typeof MerchantUserModel) {
    super(model);
  }

  async findWithPaging(options?: any, findOptions?: any): Promise<any> {
    // const result = await this.paginate(this.userModel, options, findOptions);
    return;
  }
}
