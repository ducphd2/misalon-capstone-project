import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';

@Injectable()
export class GrpcLogInterceptor implements NestInterceptor {
  private readonly logger = new Logger(GrpcLogInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<void> {
    const reqBody = context.switchToRpc().getData();
    const method = context.getHandler().name;
    const contextType = context.getType();
    const controllerName = context.getClass().name;
    this.logger.log(`GRPC-REQUEST: [${contextType}]:[${controllerName}]:[${method}]:-> ${JSON.stringify(reqBody)}`);
    return next.handle().pipe(
      tap((data) => {
        this.logger.log(`GRPC-RESPONSE: [${contextType}]:[${controllerName}]:[${method}]}`);
      }),
    );
  }
}
