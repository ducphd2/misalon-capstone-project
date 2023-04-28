import { UtilsModule } from '@libs/core';
import { UserClient } from '@libs/grpc-types';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ClientsModule } from '@nestjs/microservices';
import { PassportModule } from '@nestjs/passport';

import { JwtRefreshStrategy, JwtStrategy } from '../../core/strategies';

import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { JwtEnumService } from '@/api-gateway/core/strategies/jwt.enum';
import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';
import { UserCommonModule } from '@/api-gateway/modules/user-common/user-common.module';

@Module({
  imports: [
    ClientsModule.register([UserClient]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UserCommonModule,
    UtilsModule,
    MerchantCommonModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    JwtRefreshStrategy,
    {
      provide: JwtEnumService.JWT_ACCESS_TOKEN_SERVICE,
      inject: [ConfigService],
      useFactory: (configService: ConfigService): JwtService => {
        return new JwtService({
          secret: configService.get<string>('JWT_PRIVATE_KEY'),
          signOptions: {
            expiresIn: configService.get<string>('JWT_ACCESS_TOKEN_EXPIRATION'),
          },
        });
      },
    },
    {
      provide: JwtEnumService.JWT_REFRESH_TOKEN_SERVICE,
      inject: [ConfigService],
      useFactory: (configService: ConfigService): JwtService => {
        return new JwtService({
          secret: configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
          signOptions: {
            expiresIn: configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION'),
          },
        });
      },
    },
  ],
  exports: [],
})
export class AuthModule {}
