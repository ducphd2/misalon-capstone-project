import { IFindAndPaginateOptions, IPaginationRes } from '@libs/interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FindOptions } from 'sequelize';

import { UserModel } from '../../entities';
import { BaseRepository } from '../base.repository';

@Injectable()
export class UserRepository extends BaseRepository<UserModel> {
  constructor(@InjectModel(UserModel) readonly model: typeof UserModel) {
    super(model);
  }

  async updateUser(id: number, update: Partial<UserModel>): Promise<UserModel> {
    try {
      // const updatedEntity = await this.findById(id);
      // this.merge(updatedEntity, update);
      // this.createModel(update).updateSearchColumn();
      return;
      // return this.save(updatedEntity);
    } catch (error) {
      console.log(error);
    }
  }

  async findWithPaging(options?: any, findOptions?: any): Promise<any> {
    // const result = await this.paginate(this.userModel, options, findOptions);
    return;
  }

  async findAllWithPagination(query?: IFindAndPaginateOptions, opts?: FindOptions): Promise<IPaginationRes<UserModel>> {
    const result: IPaginationRes<UserModel> = await this.paginate(query.where, query.page, query.limit, opts);

    return result;
  }
}
