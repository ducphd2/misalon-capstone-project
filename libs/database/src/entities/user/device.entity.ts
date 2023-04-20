import { Column, Entity } from 'typeorm';

import { EDeviceOs } from '../../enums';
import { BaseEntity } from '../base.entity';

@Entity('device')
export class DeviceEntity extends BaseEntity {
  @Column('integer', { nullable: false })
  userId: number;

  @Column('smallint', { nullable: true })
  os: EDeviceOs;

  @Column('varchar', { nullable: true })
  deviceId: string;

  @Column('varchar', { nullable: true })
  token: string;
}
