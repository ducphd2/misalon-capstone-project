import { Global, Module } from '@nestjs/common';

import { SecretsModule } from './secrets/module';

@Global()
@Module({
  imports: [SecretsModule],
  exports: [SecretsModule],
})
export class GlobalModule {}
