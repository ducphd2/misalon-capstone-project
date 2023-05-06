import { BaseModel } from '@libs/database/entities/base.model';
import { EPaymentStatus, EPaymentType } from '@libs/grpc-types/protos/payment';
import { BeforeCreate, Column, DataType, Table } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

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

  @Column({ type: DataType.INTEGER })
  serviceId?: number;

  @Column({ type: DataType.INTEGER })
  userId?: number;

  @Column({ type: DataType.INTEGER })
  merchantId?: number;

  @Column({ type: DataType.INTEGER })
  branchId?: number;

  @Column({ type: DataType.INTEGER })
  bookingId?: number;

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

  @BeforeCreate
  static async insertRefCode(model: PaymentModel) {
    model.code = uuidv4();
  }
}
