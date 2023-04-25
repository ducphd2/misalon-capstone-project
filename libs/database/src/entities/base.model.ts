import { Column, DataType, Model } from 'sequelize-typescript';

export abstract class BaseModel<T> extends Model<T> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  createdAt?: string;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  updatedAt?: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  deletedAt?: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  version?: number;
}
