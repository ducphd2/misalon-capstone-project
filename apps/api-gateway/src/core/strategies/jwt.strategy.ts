import { UserProto } from '@libs/grpc-types';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientGrpc } from '@nestjs/microservices';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') implements OnModuleInit {
  private userService: UserProto.UserServiceClient;

  constructor(
    @Inject(UserProto.DUCPH_USER_PACKAGE_NAME) private client: ClientGrpc,

    private readonly configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get<string>('JWT_PRIVATE_KEY'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  onModuleInit(): void {
    this.userService = this.client.getService<UserProto.UserServiceClient>(UserProto.USER_SERVICE_NAME);
  }

  async validate(payload: any): Promise<UserProto.User> {
    const { user } = await lastValueFrom(this.userService.findById({ id: Number(payload.sub) }));
    return user;
  }
}
