import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';

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
}
