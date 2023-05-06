import { Injectable } from '@nestjs/common';
import { MessageComponent } from '@libs/modules';

import { MerchantCommonService } from '../merchant-common/merchant-common.service';

import { CreateGroupInput, PartialUpdateGroup } from '@/api-gateway/dtos';

@Injectable()
export class GroupService {
  constructor(private readonly merchantService: MerchantCommonService, private readonly i18n: MessageComponent) {}

  async create(data: CreateGroupInput, lang?: string) {
    const group = await this.merchantService.createGroup(data);
    return {
      message: this.i18n.lang('lang.BRANCH.CREATE.SUCCESS', { lang }),
      group,
    };
  }

  async update(id: number, data: PartialUpdateGroup, lang?: string) {
    const group = await this.merchantService.updateGroup(id, data);
    return {
      message: this.i18n.lang('lang.BRANCH.UPDATE.SUCCESS', { lang }),
      group,
    };
  }

  async delete(id: number, lang?: string) {
    const { count } = await this.merchantService.deleteGroup(id);

    if (count < 1) {
      return {
        message: this.i18n.lang('lang.GROUP.DELETE.FAIL', { lang }),
        count,
      };
    }

    return {
      message: this.i18n.lang('lang.GROUP.DELETE.SUCCESS', { lang }),
      count,
    };
  }

  async findDetail(id: number, lang?: string) {
    const result = await this.merchantService.findGroupById({ id });
    return result;
  }
}
