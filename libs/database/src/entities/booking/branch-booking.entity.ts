import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('branch_booking')
export class BranchBookingEntity extends BaseEntity {
  @Column('integer', { name: 'user_id', nullable: false })
  userId: number;

  @Column('text', { name: 'content', nullable: true })
  content: string;
}
