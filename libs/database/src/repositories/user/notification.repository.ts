import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BaseRepository } from '../base.repository';
import { NotificationEntity } from '../../entities';

@EntityRepository(NotificationEntity)
export class NotificationRepository extends BaseRepository<NotificationEntity> {
  constructor(@InjectRepository(NotificationEntity) readonly notificationModel: Repository<NotificationEntity>) {
    super(notificationModel);
  }
}
