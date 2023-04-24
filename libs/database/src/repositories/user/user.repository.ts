import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, FindConditions, FindManyOptions, Repository } from 'typeorm';
import { IPaginationMeta, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';

import { UserEntity } from '../../entities';
import { BaseRepository } from '../base.repository';

@EntityRepository(UserEntity)
export class UserRepository extends BaseRepository<UserEntity> {
  constructor(@InjectRepository(UserEntity) readonly userModel: Repository<UserEntity>) {
    super(userModel);
  }

  async updateUser(id: number, update: Partial<UserEntity>): Promise<UserEntity> {
    try {
      const updatedEntity = await this.findById(id);
      this.merge(updatedEntity, update);
      this.createModel(update).updateSearchColumn();
      return this.save(updatedEntity);
    } catch (error) {
      console.log(error);
    }
  }

  async findWithPaging(
    options: IPaginationOptions,
    findOptions?: FindConditions<UserEntity> | FindManyOptions<UserEntity>,
  ): Promise<Pagination<UserEntity, IPaginationMeta>> {
    const result = await this.paginationRepository(this.userModel, options, findOptions);
    return result;
  }
}
