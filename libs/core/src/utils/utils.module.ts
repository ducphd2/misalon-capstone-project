import { Module } from '@nestjs/common';

import { PasswordUtils } from './password.utils';

@Module({
  exports: [PasswordUtils],
  providers: [PasswordUtils],
})
export class UtilsModule {}
