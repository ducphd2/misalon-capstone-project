import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';
import { CommonProto, MerchantProto } from '@libs/grpc-types';
import { GrpcLogInterceptor } from 'interceptors/interceptors';
import { Observable } from 'rxjs';
import { MerchantService } from '../service/merchant.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller('merchant')
@MerchantProto.MerchantServiceControllerMethods()
export class MerchantController implements MerchantProto.MerchantServiceController {
  constructor(private readonly merchantService: MerchantService) {}
  create(
    request: MerchantProto.CreateDto,
  ): MerchantProto.FindOne | Promise<MerchantProto.FindOne> | Observable<MerchantProto.FindOne> {
    throw new Error('Method not implemented.');
  }
  findById(
    request: CommonProto.Id,
  ): MerchantProto.FindOne | Promise<MerchantProto.FindOne> | Observable<MerchantProto.FindOne> {
    throw new Error('Method not implemented.');
  }
}
