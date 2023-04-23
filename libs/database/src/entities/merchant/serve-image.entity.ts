import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../base.entity';

import { EImageType, EServeImageType } from '@/api-gateway/dtos/user/user.dto';

@Entity('serve_images')
export class ServeImageEntity extends BaseEntity {
  @Column('integer', { name: 'image_id', nullable: true })
  imageId: number;

  @Column('smallint', { name: 'serve_type', nullable: true })
  serveType: EServeImageType;

  @Column('smallint', { name: 'type', nullable: true })
  type: EImageType;
}
