import { EVnPayCommand } from '@libs/core';

export interface IVnPayParams {
  vnp_Version?: string;
  vnp_Command?: EVnPayCommand;
  vnp_TmnCode?: string;
  vnp_Amount?: number;
  vnp_CreateDate?: string;
  vnp_CurrCode?: string;
  vnp_IpAddr?: string;
  vnp_Locale?: string;
  vnp_OrderInfo?: string;
  vnp_OrderType?: string;
  vnp_ReturnUrl?: string;
  vnp_TxnRef?: string;
  vnp_SecureHash?: string;
  vnp_BankCode?: string;
  vnp_BankTranNo?: string;
  vnp_CardType?: string;
  vnp_PayDate?: string;
  vnp_TransactionNo?: string;
  vnp_TransactionStatus?: string;
  vnp_SecureHashType?: string;
}
