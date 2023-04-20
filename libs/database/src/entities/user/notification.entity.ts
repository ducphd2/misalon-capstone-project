import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('notification')
export class NotificationEntity extends BaseEntity {
  @Column('integer', { nullable: false })
  userId: number;

  @Column('text', { nullable: true })
  content: string;
}
