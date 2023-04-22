import { hash, verify } from 'argon2';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';

@Injectable()
export class PasswordUtils {
  async compare(password: string, hash: string): Promise<boolean> {
    return verify(hash, password);
  }

  async hash(password: string): Promise<string> {
    if (isEmpty(password) || password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    return hash(password);
  }
}
