import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../base.entity';

@Entity('images')
export class ImageEntity extends BaseEntity {
  @Column('smallint', { name: 'description', nullable: true })
  description: string;
}
