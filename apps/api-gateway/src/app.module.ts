import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';

import { UserModule } from './modules/user/user.module';

import { GqlConfigService } from '@/api-gateway/gql-config.service';
import { AuthModule } from '@/api-gateway/modules/auth/auth.module';
import { BookingModule } from '@/api-gateway/modules/booking/booking.module';
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
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: join(__dirname, 'i18n'),
        watch: true,
      },
      resolvers: [{ use: QueryResolver, options: ['lang'] }, AcceptLanguageResolver],
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    UploadModule,
    AuthModule,
    UserModule,
    MerchantModule,
    BranchModule,
    GroupModule,
    ServiceModule,
    BookingModule,
  ],
  controllers: [],
})
export class AppModule {}
