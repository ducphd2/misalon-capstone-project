import { COMMON_MESSAGE, ErrorHelper, MERCHANT_MESSAGE } from '@libs/core';
import { UserModel } from '@libs/database/entities';
import { MerchantPagination } from '@libs/grpc-types/protos/merchant';
import { BullQueueProvider, MessageComponent } from '@libs/modules';
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { isEmpty, merge } from 'lodash';

import { Admin, JwtAuthGuard, User } from '@/api-gateway/core';
import { BaseQueryDto, GetMerchantUserDto } from '@/api-gateway/dtos';
import { BookingCommonService } from '@/api-gateway/modules/booking-common/booking-common.service';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';

@Controller('merchants')
export class MerchantQueryController {
  constructor(
    private readonly merchantService: MerchantCommonService,
    private readonly bookingService: BookingCommonService,
    private readonly userService: UserCommonService,
    private readonly bullQueueProvider: BullQueueProvider,
    private readonly i18n: MessageComponent,
  ) {}

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
  @Admin()
  async findBranches(@User() admin: UserModel, @Param('id') id: number, @Query() query?: BaseQueryDto) {
    const result = await this.merchantService.findAllBranches(id, query);
    return result;
  }

  @Get(':id/services')
  @UseGuards(JwtAuthGuard)
  @Admin()
  async findServices(@Param('id') id: number, @Query() query?: BaseQueryDto) {
    const result = await this.merchantService.findAllServices(query, id);
    return result;
  }

  @Get(':id/bookings')
  @UseGuards(JwtAuthGuard)
  @Admin()
  async findBookings(@Param('id') id: number, @Query() query?: BaseQueryDto) {
    const result = await this.bookingService.findBookings(query, id);
    return result;
  }

  @Get(':id/users')
  @UseGuards(JwtAuthGuard)
  @Admin()
  async findUsers(@User() admin: UserModel, @Param('id') id: number, @Query() query?: GetMerchantUserDto) {
    const { merchant } = await this.merchantService.findById({ id });

    if (isEmpty(merchant)) {
      ErrorHelper.HttpNotFoundException(MERCHANT_MESSAGE.READ.NOT_FOUND);
    }

    if (merchant.userId !== admin.id) {
      ErrorHelper.HttpBadRequestException(COMMON_MESSAGE.INVALID);
    }

    const baseWhere = {
      merchantId: id,
    };

    if (query.branchId) {
      merge(baseWhere, {
        branchId: query.branchId,
      });
    }

    if (query.type.toString()) {
      merge(baseWhere, {
        role: query.type,
      });
    }

    const result = await this.userService.find({
      ...query,
      where: JSON.stringify(baseWhere),
    });
    return result;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getMerchantDetail(@Param('id') id: number) {
    const { merchant } = await this.merchantService.findById({ id });
    return { merchant };
  }
}
