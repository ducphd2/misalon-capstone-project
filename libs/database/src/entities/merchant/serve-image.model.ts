import { Column, DataType, Table } from 'sequelize-typescript';
import { EImageType, EServeImageType } from '@libs/grpc-types/protos/serve-image';

import { BaseModel } from '../base.model';

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
