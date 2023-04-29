import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { omit } from 'lodash';

export interface MetaInterface {
  params: any;
  status: boolean;
  errorCode?: string;
  timestamp: Date;
}

export interface Response<T> {
  meta?: string;
  statusCode?: number;
  message?: string;
  result: T;
}

export interface ResponseHandleData {
  code?: number;
  meta?: string;
  statusCode?: number;
  message?: string;
}

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  private logger = new Logger(TransformInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<any>> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse<ResponseHandleData>();
    const { method, url, body, params, status, query } = request;
    this.logger.log(`REQ [${method} ${url}]:-> ${JSON.stringify(body)}`);
    return next.handle().pipe(
      map((data: any) => {
        const res = {
          meta: JSON.stringify({ params: params, status: status, query, timestamp: new Date() }),
          message: data?.message ?? response.message ?? request?.message ?? 'Ok',
          code: data?.statusCode ?? status ?? response.code ?? response.statusCode,
          statusCode: data?.statusCode ?? status ?? response.statusCode,
          result: omit(data, ['message']),
        };
        return res;
      }),
    );
  }
}
