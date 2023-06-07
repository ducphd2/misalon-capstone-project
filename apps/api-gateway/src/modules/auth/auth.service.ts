import { EBullEvent, ErrorHelper, WHITELIST_USER_EMAIL } from '@libs/core';
import { UserProto } from '@libs/grpc-types';
import { BullQueueProvider, RedisService } from '@libs/modules';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('JwtAccessTokenService')
    private readonly accessTokenService: JwtService,

    @Inject('JwtRefreshTokenService')
    private readonly refreshTokenService: JwtService,

    private readonly redisService: RedisService,
    private readonly bullQueue: BullQueueProvider,
  ) {}

  async generateAccessToken(user: UserProto.User): Promise<string> {
    return this.accessTokenService.sign(
      {
        user: user.id,
      },
      {
        subject: user.id.toString(),
      },
    );
  }

  async generateRefreshToken(user: UserProto.User): Promise<string> {
    return this.refreshTokenService.sign(
      {
        user: user.id,
      },
      {
        subject: user.id.toString(),
      },
    );
  }

  async genOtpRegisterMerchant(userId: number, email: string) {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    const key = `verify-otp${userId}`;

    if (WHITELIST_USER_EMAIL.includes(email)) {
      return {
        message: 'Hệ thống đã gửi OTP qua email của bạn, vui lòng kiểm tra email.',
      };
    }

    await this.redisService.set(key, generatedOtp, 5 * 60);
    await this.bullQueue.addNotificationEvent(EBullEvent.SEND_EMAIL_VERIFY_OTP, {
      userId,
      email,
      generatedOtp,
    });

    return {
      message: 'Hệ thống đã gửi OTP qua email của bạn, vui lòng kiểm tra email.',
    };
  }

  async verifyOtpRegisterMerchant(userId: number, email: string, otp: number) {
    if (WHITELIST_USER_EMAIL.includes(email)) {
      if (otp !== 111111) {
        ErrorHelper.HttpBadRequestException('OTP không đúng');
      }

      return {
        message: 'Xác thực OTP thành công.',
      };
    }

    const key = `verify-otp${userId}`;
    const existOtp = await this.redisService.get(key);

    if (!existOtp || otp !== Number(existOtp)) {
      ErrorHelper.HttpBadRequestException('OTP không đúng vui lòng thử lại');
    }

    await this.redisService.del(key);

    return {
      message: 'Xác thực OTP thành công',
    };
  }
}
