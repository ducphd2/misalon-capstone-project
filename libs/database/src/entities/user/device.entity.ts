import { Column, Entity } from 'typeorm';
import { EDeviceOs } from '@libs/grpc-types/protos/device';

import { BaseEntity } from '../base.entity';

@Entity('devices')
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
