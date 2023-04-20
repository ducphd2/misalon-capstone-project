import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { GqlLoggingInterceptor } from 'interceptors/interceptors/logging.interceptor';

import { UserModule } from './modules/user/user.module';

import { GqlConfigService } from '@/api-gateway/gql-config.service';
import { AuthModule } from '@/api-gateway/modules/auth/auth.module';
import { BranchModule } from '@/api-gateway/modules/branch/branch.module';
import { GroupModule } from '@/api-gateway/modules/group/group.module';
import { MerchantModule } from '@/api-gateway/modules/merchant/merchant.module';
import { ServiceModule } from '@/api-gateway/modules/service/service.module';
import { UploadModule } from '@/api-gateway/modules/upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'apps/api-gateway/src/schema.gql'),
    //   playground: {
    //     settings: {
    //       'request.credentials': 'include',
    //     },
    //   },
    //   context: ({ req, res }) => {
    //     return { req, res };
    //   },
    //   installSubscriptionHandlers: true,
    //   csrfPrevention: false,
    // }),
    UploadModule,
    AuthModule,
    UserModule,
    MerchantModule,
    BranchModule,
    GroupModule,
    ServiceModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: GqlLoggingInterceptor,
    },
  ],
})
export class AppModule {}
