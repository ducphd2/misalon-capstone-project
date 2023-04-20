import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class GqlLoggingInterceptor implements NestInterceptor {
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger(this.constructor.name);
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const call$ = next.handle();
    const gqlContext = GqlExecutionContext.create(context);

    const resolverName = gqlContext.getInfo().fieldName;
    const args = JSON.stringify(gqlContext.getArgs());

    return call$.pipe(
      tap(() => this.logger.debug(`Handling request: ${resolverName} - args: ${args} took ${Date.now() - now}ms`)),
    );
  }
}
