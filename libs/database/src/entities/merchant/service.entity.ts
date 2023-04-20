import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../base.entity';
import { EServiceShowType, EServiceType } from '../../enums';

@Entity('service')
export class ServiceEntity extends BaseEntity {
  @Column('integer', { name: 'group_id', nullable: false })
  groupId?: number;

  @Column('double precision', { name: 'price', nullable: false, default: 0 })
  price?: number;

  @Column('double precision', { name: 'address', nullable: true, default: 0 })
  initialPrice?: number;

  @Column('double precision', { name: 'capital_price', nullable: true, default: 0 })
  capitalPrice?: number;

  @Column('smallint', { name: 'duration_hour', nullable: true })
  durationHour?: number;

  @Column('smallint', { name: 'duration_minute', nullable: true })
  durationMinute?: number;

  @Column('varchar', { name: 'sku', nullable: true })
  sku?: string;

  @Column('varchar', { name: 'code', nullable: true })
  code?: string;

  @Column('varchar', { name: 'name', nullable: true })
  name?: string;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('varchar', { name: 'image', nullable: true })
  image?: string;

  @Column('smallint', { name: 'type', nullable: true })
  type?: EServiceType;

  @Column('smallint', { name: 'show_type', nullable: true })
  showType?: EServiceShowType;

  @Column('smallint', { name: 'can_printable_invoice', nullable: true })
  canPrintableInvoice?: number;
}
