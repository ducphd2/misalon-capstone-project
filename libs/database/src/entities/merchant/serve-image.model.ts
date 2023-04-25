import { Column, DataType, Table } from 'sequelize-typescript';

import { BaseModel } from '../base.model';

import { EImageType, EServeImageType } from '@/api-gateway/dtos/common';

@Table({
  modelName: 'serve_image',
  tableName: 'serve_images',
  underscored: true,
})
export class ServeImageModel extends BaseModel<ServeImageModel> {
  @Column({ type: DataType.INTEGER })
  imageId: number;

  @Column({ type: DataType.SMALLINT })
  serveType: EServeImageType;

  @Column({ type: DataType.SMALLINT })
  type: EImageType;
}
