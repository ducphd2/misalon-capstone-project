import { UserModel } from '@libs/database';
import { MessageComponent } from '@libs/modules';
import { Injectable } from '@nestjs/common';

import { MerchantCommonService } from '../merchant-common/merchant-common.service';

import { CreateInput, PartialUpdateService } from '@/api-gateway/dtos';

@Injectable()
export class FeedbackService {
  constructor(private readonly merchantService: MerchantCommonService, private readonly i18n: MessageComponent) {}

  async create(data: CreateInput, user: UserModel, lang?: string) {
    const feedback = await this.merchantService.createFeedback({ ...data, userId: user.id });
    return {
      message: this.i18n.lang('lang.FEEDBACK.CREATE.SUCCESS', { lang }),
      feedback,
    };
  }

  async update(id: number, data: PartialUpdateService, lang?: string) {
    const updatedService = await this.merchantService.updateFeedback(id, data);
    return {
      message: this.i18n.lang('lang.FEEDBACK.UPDATE.SUCCESS', { lang }),
      service: updatedService,
    };
  }

  async delete(id: number, lang?: string) {
    const result = await this.merchantService.deleteService(id);
    return {
      message: this.i18n.lang('lang.FEEDBACK.DELETE.SUCCESS', { lang }),
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
