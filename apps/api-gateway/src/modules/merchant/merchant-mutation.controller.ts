import { COMMON_MESSAGE, EBullEvent, ErrorHelper, MERCHANT_MESSAGE, USER_MESSAGE } from '@libs/core';
import { UserModel } from '@libs/database/entities';
import { BullQueueProvider, MessageComponent } from '@libs/modules';
import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { isEmpty } from 'lodash';

import { Admin, JwtAuthGuard, Token, User } from '@/api-gateway/core';
import {
  CreateBookingInput,
  CreateBranchInput,
  MerchantAddOperatorDto,
  MerchantCreateServiceInput,
  TokenDto,
} from '@/api-gateway/dtos';
import { BookingCommonService } from '@/api-gateway/modules/booking-common/booking-common.service';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';

@Controller('merchants')
export class MerchantMutationController {
  constructor(
    private readonly merchantService: MerchantCommonService,
    private readonly bookingService: BookingCommonService,
    private readonly userService: UserCommonService,
    private readonly bullQueueProvider: BullQueueProvider,
    private readonly i18n: MessageComponent,
  ) {}

  @Post(':id/users')
  @UseGuards(JwtAuthGuard)
  @Admin()
  async addUser(@User() admin: UserModel, @Param('id') id: number, @Body() userInput: MerchantAddOperatorDto) {
    const { merchant } = await this.merchantService.findById({ id });

    if (isEmpty(merchant)) {
      ErrorHelper.HttpNotFoundException(MERCHANT_MESSAGE.READ.NOT_FOUND);
    }

    if (merchant.userId !== admin.id) {
      ErrorHelper.HttpBadRequestException(COMMON_MESSAGE.INVALID);
    }

    const { count } = await this.userService.countUser({
      where: JSON.stringify({ email: userInput.email }),
    });

    if (count >= 1) {
      ErrorHelper.HttpBadRequestException(USER_MESSAGE.CREATE.EXIST_EMAIL);
    }

    const { user } = await this.userService.addOperator({
      user: {
        ...userInput,
        merchantId: id,
      },
    });

    await this.bullQueueProvider.addNotificationEvent(EBullEvent.NOTIFICATION_SEND_EMAIL_MERCHANT_ADD_OPERATOR, {
      ...user,
      ...userInput,
    });

    return {
      message: 'Add employee successfully, please check email that sent password',
      user,
    };
  }

  @Post(':id/branches')
  @UseGuards(JwtAuthGuard)
  @Admin()
  async createBranch(
    @User() admin: UserModel,
    @Param('id') id: number,
    @Body() data: CreateBranchInput,
    @Token() { lang }: TokenDto,
  ) {
    const { merchant } = await this.merchantService.findById({ id });

    if (isEmpty(merchant)) {
      ErrorHelper.HttpNotFoundException(MERCHANT_MESSAGE.READ.NOT_FOUND);
    }

    if (merchant.userId !== admin.id) {
      ErrorHelper.HttpBadRequestException(COMMON_MESSAGE.INVALID);
    }

    const branch = await this.merchantService.createBranch({ ...data, merchantId: id });

    return {
      message: this.i18n.lang('lang.BRANCH.CREATE.SUCCESS', { lang }),
      branch,
    };
  }

  @Post(':id/services')
  @UseGuards(JwtAuthGuard)
  @Admin()
  async createService(
    @User() admin: UserModel,
    @Param('id') id: number,
    @Body() data: MerchantCreateServiceInput,
    @Token() { lang }: TokenDto,
  ) {
    const { merchant } = await this.merchantService.findById({ id });

    if (isEmpty(merchant)) {
      ErrorHelper.HttpNotFoundException(MERCHANT_MESSAGE.READ.NOT_FOUND);
    }

    if (merchant.userId !== admin.id) {
      ErrorHelper.HttpBadRequestException(COMMON_MESSAGE.INVALID);
    }

    const service = await this.merchantService.createService({ ...data, merchantId: id });

    return {
      message: this.i18n.lang('lang.SERVICE.CREATE.SUCCESS', { lang }),
      service,
    };
  }

  @Post(':id/bookings')
  @UseGuards(JwtAuthGuard)
  @Admin()
  async createBooking(
    @User() admin: UserModel,
    @Param('id') id: number,
    @Body() data: CreateBookingInput,
    @Token() { lang }: TokenDto,
  ) {
    const { merchant } = await this.merchantService.findById({ id });

    if (isEmpty(merchant)) {
      ErrorHelper.HttpNotFoundException(MERCHANT_MESSAGE.READ.NOT_FOUND);
    }

    if (merchant.userId !== admin.id) {
      ErrorHelper.HttpBadRequestException(COMMON_MESSAGE.INVALID);
    }

    const booking = await this.bookingService.create({ ...data, merchantId: id });

    return {
      message: this.i18n.lang('lang.SERVICE.CREATE.SUCCESS', { lang }),
      booking,
    };
  }
}
