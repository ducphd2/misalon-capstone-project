import { UserModel } from '@libs/database/entities';
import { MerchantPagination } from '@libs/grpc-types/protos/merchant';
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { isEmpty } from 'lodash';

import { JwtAuthGuard, User } from '@/api-gateway/core';
import { BaseQueryDto } from '@/api-gateway/dtos';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';

@Controller('merchants')
export class MerchantController {
  constructor(private readonly merchantService: MerchantCommonService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAllMerchants(@Query() query: BaseQueryDto): Promise<MerchantPagination> {
    let where = null;

    if (!isEmpty(query?.q)) {
      where = {
        search: {
          _iLike: `%${query?.q}%`,
        },
      };
    }

    const result = await this.merchantService.find({
      ...query,
      where: where ? JSON.stringify(where) : null,
    });
    return result;
  }

  @Get(':id/branches')
  @UseGuards(JwtAuthGuard)
  async findBranches(@User() admin: UserModel, @Param('id') id: number, @Query() query?: BaseQueryDto) {
    const result = await this.merchantService.findAllBranches(id, query);
    return result;
  }

  @Get(':id/groups')
  @UseGuards(JwtAuthGuard)
  async findGroups(@User() admin: UserModel, @Param('id') id: number, @Query() query?: BaseQueryDto) {
    const result = await this.merchantService.findAllGroups(id, query);
    return result;
  }

  @Get(':id/services')
  @UseGuards(JwtAuthGuard)
  async findServices(@Param('id') id: number, @Query() query?: BaseQueryDto) {
    const result = await this.merchantService.findAllServices(query, id);
    return result;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getMerchantDetail(@Param('id') id: number) {
    const { merchant } = await this.merchantService.findById({ id });
    return { merchant };
  }
}
