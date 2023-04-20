import { EntityRepository, Repository } from 'typeorm';
import { NotificationEntity } from '../../entities';

@EntityRepository(NotificationEntity)
export class NotificationRepository extends Repository<NotificationEntity> {}
