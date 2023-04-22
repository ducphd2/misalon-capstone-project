import { HttpException, HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export class ErrorHelper {
  static BadRequestException(message: string) {
    throw new RpcException({
      code: HttpStatus.BAD_REQUEST,
      message,
    });
  }

  static HttpBadRequestException(message: string) {
    throw new HttpException(message, HttpStatus.BAD_REQUEST);
  }

  static UnauthorizedException(message: string) {
    throw new RpcException({
      code: HttpStatus.UNAUTHORIZED,
      message,
    });
  }

  static HttpUnauthorizedException(message: string) {
    throw new HttpException(message, HttpStatus.UNAUTHORIZED);
  }

  static NotFoundException(message: string) {
    throw new RpcException({
      code: HttpStatus.NOT_FOUND,
      message,
    });
  }

  static HttpNotFoundException(message: string) {
    throw new HttpException(message, HttpStatus.NOT_FOUND);
  }

  static ForbiddenException(message: string) {
    throw new RpcException({
      code: HttpStatus.FORBIDDEN,
      message,
    });
  }

  static HttpForbiddenException(message: string) {
    throw new HttpException(message, HttpStatus.FORBIDDEN);
  }

  static InternalServerErrorException(message: string) {
    throw new RpcException({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message,
    });
  }

  static HttpInternalServerErrorException(message: string) {
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
