import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse = exception.getResponse() as any;

    let errors = null;

    if (exceptionResponse.message && typeof exceptionResponse.message === 'string') {
      errors = exceptionResponse.message;
    } else if (
      exceptionResponse.message &&
      Array.isArray(exceptionResponse.message) &&
      exceptionResponse.message.length > 0
    ) {
      errors = exceptionResponse.message.map((error) => error.charAt(0).toUpperCase() + error.slice(1));
    }

    response.status(status).json({
      success: false,
      message:
        typeof exception.message === 'string'
          ? exception.message.charAt(0).toUpperCase() + exception.message.slice(1)
          : exception.message,
      errors: errors ?? exceptionResponse,
    });
  }
}
