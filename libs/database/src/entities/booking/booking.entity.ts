import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { EBookingStatus } from '../../enums';

@Entity('booking')
export class BookingEntity extends BaseEntity {
  @Column('smallint', { name: 'status', nullable: true })
  status: EBookingStatus;

  @Column('varchar', { name: 'start_time', nullable: true })
  startTime: string;

  @Column('varchar', { name: 'end_time', nullable: true })
  endTime: string;

  @Column('smallint', { name: 'duration_hour', nullable: true })
  durationHour: number;

  @Column('smallint', { name: 'duration_minute', nullable: true })
  durationMinute: number;
}
