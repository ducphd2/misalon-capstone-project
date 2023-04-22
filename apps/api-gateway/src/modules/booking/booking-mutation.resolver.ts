import { UserEntity } from '@libs/database/entities';
import { Logger, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { isNil } from 'lodash';

import { CurrentUser } from '@/api-gateway/core/decorators/user/current-user.decorator';
import { GqlAuthGuard } from '@/api-gateway/core/guards/jwt.guard';
import { BookingCommonService } from '@/api-gateway/modules/booking-common/booking-common.service';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { UserCommonService } from '@/api-gateway/modules/user-common/user-common.service';
import {
  Booking,
  BookingPayload,
  CreateBookingInput,
  DeleteBookingPayload,
  PartialUpdateBooking,
} from '@/api-gateway/types';

@Resolver(() => Booking)
export class BookingMutationResolver {
  private readonly logger = new Logger(this.constructor.name);

  constructor(
    private readonly bookingService: BookingCommonService,
    private readonly userService: UserCommonService,
    private readonly merchantService: MerchantCommonService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => BookingPayload)
  async createBooking(@Args('data') bookingInput: CreateBookingInput): Promise<BookingPayload> {
    try {
      const booking: Booking = await this.bookingService.create(bookingInput);

      return { booking };
    } catch (error) {
      console.log('Create booking error: ', error);
      throw new Error(error);
    }
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => BookingPayload)
  async customerCreateBooking(
    @CurrentUser() user: UserEntity,
    @Args('data') data: CreateBookingInput,
  ): Promise<BookingPayload> {
    try {
      const { service } = await this.merchantService.findServiceById({
        id: data.serviceId,
      });

      if (isNil(service)) {
        this.logger.error(`Branch service is not found, ${JSON.stringify(data)}`);
        throw new Error('Branch service is not found');
      }

      const booking: Booking = await this.bookingService.create({ ...data, userId: user.id });

      return { booking };
    } catch (error) {
      this.logger.error('Customer create booking error', error.stack, error.message);
      throw new Error(error);
    }
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => BookingPayload)
  async updateBooking(@Args('id') id: number, @Args('data') data: PartialUpdateBooking): Promise<BookingPayload> {
    const booking: Booking = await this.bookingService.update(id, data);

    return { booking };
  }

  @Mutation(() => DeleteBookingPayload)
  @UseGuards(GqlAuthGuard)
  async deleteBooking(@Args('id') id: number): Promise<DeleteBookingPayload> {
    return await this.bookingService.delete(id);
  }
}
