import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../base.entity';

@Entity('branchs')
export class BranchEntity extends BaseEntity {
  @Column('integer', { name: 'merchant_id', nullable: false })
  merchantId?: number;

  @Column('varchar', { name: 'name', nullable: false })
  name?: string;

  @Column('varchar', { name: 'address', nullable: true })
  address?: string;

  @Column('varchar', { name: 'phone', nullable: true })
  phone?: string;

  @Column('smallint', { name: 'city_code', nullable: true })
  cityCode?: number;

  @Column('smallint', { name: 'district_code', nullable: true })
  districtCode?: number;

  @Column('smallint', { name: 'ward_code', nullable: true })
  wardCode?: number;

  @Column('varchar', { name: 'city', nullable: true })
  city?: string;

  @Column('varchar', { name: 'district', nullable: true })
  district?: string;

  @Column('varchar', { name: 'ward', nullable: true })
  ward?: string;

  @Column({
    type: 'double precision',
    default: 0,
  })
  latitude?: number;

  @Column({
    type: 'double precision',
    default: 0,
  })
  longitude?: number;
}
