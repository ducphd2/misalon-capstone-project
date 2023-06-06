import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';

export class CallbackPaymentInput {
  @IsString()
  @IsOptional()
  vnp_Version?: string;

  @IsString()
  @IsOptional()
  vnp_TmnCode?: string;

  @Transform(({ value }) => Number(value))
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  vnp_Amount?: number;

  @IsString()
  @IsOptional()
  vnp_CreateDate?: string;

  @IsString()
  @IsOptional()
  vnp_CurrCode?: string;

  @IsString()
  @IsOptional()
  vnp_IpAddr?: string;

  @IsString()
  @IsOptional()
  vnp_Locale?: string;

  @IsString()
  @IsOptional()
  vnp_OrderInfo?: string;

  @IsString()
  @IsOptional()
  vnp_OrderType?: string;

  @IsString()
  @IsOptional()
  vnp_ReturnUrl?: string;

  @IsString()
  @IsOptional()
  vnp_TxnRef?: string;

  @IsString()
  @IsOptional()
  vnp_SecureHash?: string;

  @IsString()
  @IsOptional()
  vnp_BankCode?: string;

  @IsString()
  @IsOptional()
  vnp_BankTranNo?: string;

  @IsString()
  @IsOptional()
  vnp_CardType?: string;

  @IsString()
  @IsOptional()
  vnp_PayDate?: string;

  @IsString()
  @IsOptional()
  vnp_TransactionNo?: string;

  @IsString()
  @IsOptional()
  vnp_TransactionStatus?: string;

  @IsString()
  @IsOptional()
  vnp_SecureHashType?: string;
}
