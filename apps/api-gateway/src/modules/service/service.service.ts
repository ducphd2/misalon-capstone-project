import { Injectable } from '@nestjs/common';
import { MessageComponent } from '@libs/modules';

import { CreateServiceInput, PartialUpdateService } from '@/api-gateway/dtos';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';

@Injectable()
export class ServicesService {
  constructor(private readonly merchantService: MerchantCommonService, private readonly i18n: MessageComponent) {}

  async create(data: CreateServiceInput, lang?: string) {
    const service = await this.merchantService.createService(data);
    return {
      message: this.i18n.lang('lang.SERVICE.CREATE.SUCCESS', { lang }),
      service,
    };
  }

  async update(id: number, data: PartialUpdateService, lang?: string) {
    const updatedService = await this.merchantService.updateService(id, data);
    return {
      message: this.i18n.lang('lang.SERVICE.UPDATE.SUCCESS', { lang }),
      service: updatedService,
    };
  }

  async delete(id: number, lang?: string) {
    const result = await this.merchantService.deleteService(id);
    return {
      message: this.i18n.lang('lang.SERVICE.DELETE.SUCCESS', { lang }),
      result,
    };
  }

  async findDetail(id: number, lang?: string) {
    const { service } = await this.merchantService.findServiceById({ id });
    return {
      service,
    };
  }
}
