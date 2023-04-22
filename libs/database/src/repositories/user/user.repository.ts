import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';

import { UserEntity } from '../../entities';
import { BaseRepository } from '../base.repository';

@EntityRepository(UserEntity)
export class UserRepository extends BaseRepository<UserEntity> {
  constructor(@InjectRepository(UserEntity) readonly userModel: Repository<UserEntity>) {
    super(userModel);
  }
}
