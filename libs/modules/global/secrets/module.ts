import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AbstractSecretsService } from './adapter';
import { SecretsService } from './service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
  ],
  providers: [
    {
      provide: AbstractSecretsService,
      useClass: SecretsService,
    },
  ],
  exports: [AbstractSecretsService],
})
export class SecretsModule {}
