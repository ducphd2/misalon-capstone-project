import { BaseModel } from '@libs/database/entities/base.model';
import { EPaymentStatus, EPaymentType } from '@libs/grpc-types/protos/payment';
import { BeforeCreate, BelongsTo, Column, DataType, ForeignKey, HasMany, Table } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

import { BookingModel } from '../booking';
import { UserModel } from '../user';

@Table({
  modelName: 'payment',
  tableName: 'payments',
  underscored: true,
})
export class PaymentModel extends BaseModel<PaymentModel> {
  @Column({ type: DataType.UUID })
  code?: string;

  @Column({ type: DataType.INTEGER })
  status?: EPaymentStatus;

  @Column({ type: DataType.INTEGER })
  type?: EPaymentType;

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER })
  userId?: number;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.INTEGER,
  })
  createdBy?: number;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.INTEGER,
  })
  updatedBy?: number;

  @Column({ type: DataType.INTEGER })
  merchantId?: number;

  @Column({ type: DataType.INTEGER })
  branchId?: number;

  @Column({ type: DataType.DOUBLE })
  totalPrice?: number;

  @Column({ type: DataType.TEXT })
  vnpBankCode?: string;

  @Column({ type: DataType.TEXT })
  vnpBankTranNo?: string;

  @Column({ type: DataType.TEXT })
  vnpCardType?: string;

  @Column({ type: DataType.TEXT })
  vnpPayDate?: string;

  @Column({ type: DataType.TEXT })
  vnpOrderInfo?: string;

  @Column({ type: DataType.TEXT })
  vnpTransactionNo?: string;

  @BelongsTo(() => UserModel)
  user?: UserModel;

  @BelongsTo(() => UserModel)
  creator?: UserModel;

  @BelongsTo(() => UserModel)
  updater?: UserModel;

  @HasMany(() => BookingModel)
  bookings?: BookingModel[];

  @BeforeCreate
  static async insertRefCode(model: PaymentModel) {
    model.code = uuidv4();
  }
}
