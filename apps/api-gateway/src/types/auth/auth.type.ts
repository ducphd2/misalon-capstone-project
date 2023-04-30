import { User } from '@/api-gateway/types/user';

export class ResponseAuthGrpc {
  user: User;

  accessToken: string;

  refreshToken: string;
}
