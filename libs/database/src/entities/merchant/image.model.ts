import { Column, DataType, Table } from 'sequelize-typescript';

import { BaseModel } from '../base.model';

@Table({
  modelName: 'image',
  tableName: 'images',
  underscored: true,
})
export class ImageModel extends BaseModel<ImageModel> {
  @Column({ type: DataType.TEXT })
  description: string;
}
