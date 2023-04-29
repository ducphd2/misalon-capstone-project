import { ErrorHelper } from '@libs/core';
import { UserModel } from '@libs/database/entities';
import { Injectable } from '@nestjs/common';
import { isEmpty, merge } from 'lodash';

import { MessageComponent } from '@/api-gateway/core';
import { BaseQueryDto, CreateBranchInput, PartialUpdateBranch } from '@/api-gateway/dtos';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';

@Injectable()
export class BranchService {
  constructor(private readonly merchantService: MerchantCommonService, private readonly i18n: MessageComponent) {}

  async createBranch(data: CreateBranchInput, lang?: string) {
    const branch = await this.merchantService.createBranch(data);
    return {
      message: this.i18n.lang('lang.BRANCH.CREATE.SUCCESS', { lang }),
      branch,
    };
  }

  async updateBranch(id: number, data: PartialUpdateBranch, lang?: string) {
    const { branch } = await this.merchantService.branch({
      where: JSON.stringify({
        id,
      }),
    });

    if (!branch) {
      ErrorHelper.HttpNotFoundException(this.i18n.lang('lang.BRANCH.READ.NOT_EXIST', { lang }));
    }

    const updatedBranch = await this.merchantService.updateBranch(id, data);
    return {
      message: this.i18n.lang('lang.BRANCH.CREATE.SUCCESS', { lang }),
      branch: updatedBranch,
    };
  }

  async deleteBranch(id: number, lang?: string) {
    const result = await this.merchantService.deleteBranch(id);
    return {
      message: this.i18n.lang('lang.BRANCH.DELETE.SUCCESS', { lang }),
      result,
    };
  }

  async findBranchDetail(id: number) {
    const result = await this.merchantService.findBranchById({ id });
    return result;
  }

  async findAllBranch(merchantId?: number, query?: BaseQueryDto) {
    let where = null;

    if (merchantId) {
      where = {
        merchantId,
      };
    }

    if (!isEmpty(query?.q)) {
      merge(where, {
        search: {
          _iLike: `%${query?.q}%`,
        },
      });
    }

    const result = await this.merchantService.findBranches({
      ...query,
      where: where ? JSON.stringify(where) : null,
    });

    return result;
  }
}
