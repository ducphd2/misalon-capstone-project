import { ArgumentsHost, Catch, Logger } from '@nestjs/common';
import { BaseRpcExceptionFilter } from '@nestjs/microservices';
import { throwError } from 'rxjs';

@Catch()
export class GrpcAllExceptionsFilter extends BaseRpcExceptionFilter {
  private logger = new Logger(GrpcAllExceptionsFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    this.logger.error(`ERROR: ${exception.message}`);
    return throwError(() => exception);
  }
}
