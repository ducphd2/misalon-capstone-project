import { Column, Entity } from 'typeorm';
import { EImageType, EServeImageType } from '../../enums';
import { BaseEntity } from '../base.entity';

@Entity('serve_image')
export class ServeImageEntity extends BaseEntity {
  @Column('integer', { name: 'image_id', nullable: true })
  imageId: number;

  @Column('smallint', { name: 'serve_type', nullable: true })
  serveType: EServeImageType;

  @Column('smallint', { name: 'type', nullable: true })
  type: EImageType;
}
