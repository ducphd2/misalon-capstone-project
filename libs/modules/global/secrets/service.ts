import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AbstractSecretsService } from './adapter';

@Injectable()
export class SecretsService extends ConfigService implements AbstractSecretsService {
  constructor() {
    super();
  }

  env = this.get('ENV');

  port = this.get<number>('PORT');

  userServiceDatabase = {
    host: this.get<string>('USER_DB_HOST'),
    port: this.get<number>('USER_DB_PORT'),
    username: this.get<string>('USER_DB_USERNAME'),
    password: this.get<string>('USER_DB_PASSWORD'),
    database: this.get<string>('USER_DB_DATABASE'),
  };

  merchantServiceDatabase = {
    host: this.get<string>('MERCHANT_DB_HOST'),
    port: this.get<number>('MERCHANT_DB_PORT'),
    username: this.get<string>('MERCHANT_DB_USERNAME'),
    password: this.get<string>('MERCHANT_DB_PASSWORD'),
    database: this.get<string>('MERCHANT_DB_DATABASE'),
  };

  bookingServiceDatabase = {
    host: this.get<string>('BOOKING_DB_HOST'),
    port: this.get<number>('BOOKING_DB_PORT'),
    username: this.get<string>('BOOKING_DB_USERNAME'),
    password: this.get<string>('BOOKING_DB_PASSWORD'),
    database: this.get<string>('BOOKING_DB_DATABASE'),
  };

  notificationServiceDatabase = {
    host: this.get<string>('NOTIFICATION_DB_HOST'),
    port: this.get<number>('NOTIFICATION_DB_PORT'),
    username: this.get<string>('NOTIFICATION_DB_USERNAME'),
    password: this.get<string>('NOTIFICATION_DB_PASSWORD'),
    database: this.get<string>('NOTIFICATION_DB_DATABASE'),
  };

  paymentServiceDatabase = {
    host: this.get<string>('PAYMENT_DB_HOST'),
    port: this.get<number>('PAYMENT_DB_PORT'),
    username: this.get<string>('PAYMENT_DB_USERNAME'),
    password: this.get<string>('PAYMENT_DB_PASSWORD'),
    database: this.get<string>('PAYMENT_DB_DATABASE'),
  };

  // VNPay
  vnpVersion = this.get<string>('VNP_VERSION');
  vnpTmnCode = this.get<string>('VNP_TMN_CODE');
  vnpLocale = this.get<string>('VNP_LOCALE');
  vnpCurrCode = this.get<string>('VNP_CURR_CODE');
  vnpReturnUrl = this.get<string>('VNP_RETURN_URL');
  vnpSecretKey = this.get<string>('VNP_HASH_SECRET');
  vnpUrl = this.get<string>('VNP_URL');

  // Firebase
  firebaseIcon =
    this.get<string>('FIREBASE_ICON') || 'https://misalon.s3.ap-southeast-1.amazonaws.com/logo_U2e_icon.ico';
}
