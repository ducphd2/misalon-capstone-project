import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('booking_user')
export class BookingUserEntity extends BaseEntity {
  @Column('integer', { name: 'branch_id', nullable: false })
  branchId: number;

  @Column('integer', { name: 'booking_id', nullable: false })
  bookingId: number;
}
