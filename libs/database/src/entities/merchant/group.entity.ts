import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../base.entity';

@Entity('groups')
export class GroupEntity extends BaseEntity {
  @Column('integer', { name: 'merchant_id', nullable: false })
  merchantId?: number;

  @Column('varchar', { name: 'sku', nullable: true })
  sku?: string;

  @Column('varchar', { name: 'code', nullable: true })
  code?: string;

  @Column('varchar', { name: 'name', nullable: true })
  name?: string;

  @Column('varchar', { name: 'description', nullable: true })
  description?: string;

  @Column('varchar', { name: 'image', nullable: true })
  image?: string;
}
