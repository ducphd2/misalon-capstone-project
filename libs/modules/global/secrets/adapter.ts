import { IPostgresEnv } from './types';

export abstract class AbstractSecretsService {
  env: string;

  userServiceDatabase: IPostgresEnv;

  merchantServiceDatabase: IPostgresEnv;

  bookingServiceDatabase: IPostgresEnv;

  notificationServiceDatabase: IPostgresEnv;
}
