import { Column, Entity } from 'typeorm';
import { EBookingStatus } from '@libs/grpc-types/protos/booking';

import { BaseEntity } from '../base.entity';

@Entity('booking')
export class BookingEntity extends BaseEntity {
  @Column('smallint', { name: 'status', nullable: true })
  status?: EBookingStatus;

  @Column('varchar', { name: 'start_time', nullable: true })
  startTime?: string;

  @Column('varchar', { name: 'end_time', nullable: true })
  endTime?: string;

  @Column('text', { nullable: true })
  note?: string;

  @Column('varchar', { nullable: true })
  cancelReason?: string;

  @Column('varchar', { nullable: true })
  bookingDate?: string;

  @Column('smallint', { name: 'duration_hour', nullable: true })
  durationHour?: number;

  @Column('smallint', { name: 'duration_minute', nullable: true })
  durationMinute?: number;

  @Column('smallint', { nullable: true })
  duration?: number;
}
