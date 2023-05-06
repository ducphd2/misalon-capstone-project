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
}
