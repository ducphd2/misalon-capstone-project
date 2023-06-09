import { EBullEvent } from '@libs/core';
import {
  BookingRepository,
  BookingServiceRepository,
  BranchModel,
  BranchRepository,
  BranchUserRepository,
  MerchantModel,
  ServiceModel,
  UserModel,
  UserRepository,
} from '@libs/database';
import { BookingProto, CommonProto } from '@libs/grpc-types';
import { EBookingStatus } from '@libs/grpc-types/protos/commons';
import { BullQueueProvider } from '@libs/modules';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { isEmpty, omit, pick } from 'lodash';

@Injectable()
export class BookingService implements OnModuleInit {
  constructor(
    private readonly bookingRepository: BookingRepository,
    private readonly bullQueueProvider: BullQueueProvider,
    private readonly userRepository: UserRepository,
    private readonly branchUserRepository: BranchUserRepository,
    private readonly branchRepository: BranchRepository,
    private readonly bookingServiceRepository: BookingServiceRepository,
  ) {}

  onModuleInit() {}

  async create(dto: BookingProto.CreateBookingInput) {
    const userData = pick(dto, ['fullName', 'gender', 'phoneNumber', 'address']);

    let user = null;
    if (!isEmpty(userData) && !dto.userId) {
      user = await this.userRepository.create(userData);
      await this.branchUserRepository.create({
        userId: user.id,
        merchantId: dto.merchantId,
        branchId: dto.branchId,
      });
    }

    const booking = await this.bookingRepository.create({ ...dto, userId: dto?.userId ?? user?.id ?? null });

    await Promise.all(
      dto.serviceIds.map((serviceId: number) =>
        this.bookingServiceRepository.create({ bookingId: booking.id, serviceId }),
      ),
    );
    await Promise.all([
      this.bullQueueProvider.addBookingEvent(EBullEvent.BS_INSERT_BOOKING_SERVICES_DATA, {
        serviceIds: dto.serviceIds,
        bookingId: booking.id,
        userId: booking?.userId ?? user?.id,
        branchId: booking?.branchId,
      }),
      this.bullQueueProvider.addNotificationEvent(EBullEvent.NS_NEW_BOOKING, {
        ...booking,
        ...dto,
        userId: booking?.userId ?? user?.id,
      }),
    ]);

    return booking;
  }

  async find(request: CommonProto.QueryRequest) {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.bookingRepository.findAndPaginate(
      {
        ...request,
        where: baseWhereQuery,
      },
      {
        include: [
          ServiceModel,
          UserModel,
          {
            model: BranchModel,
            include: [MerchantModel],
          },
        ],
      },
    );

    return result;
  }

  async findAll(request: CommonProto.QueryRequest) {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.bookingRepository.find({
      ...request,
      where: baseWhereQuery,
      include: [
        ServiceModel,
        UserModel,
        {
          model: BranchModel,
          include: [MerchantModel],
        },
      ],
    });

    return result.map((booking) => {
      return {
        ...omit(booking, ['branch']),
        branch: booking.branch,
        merchant: booking.branch.merchant,
      };
    });
  }

  async findWithPaging(request: CommonProto.QueryRequest) {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.bookingRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result.items.map((booking) => {
      return {
        ...omit(booking, ['branch']),
        branch: booking.branch,
        merchant: booking.branch.merchant,
      };
    });
  }

  async findById(id: number) {
    const booking = await this.bookingRepository.findById(id, {
      include: [
        ServiceModel,
        UserModel,
        {
          model: BranchModel,
          include: [MerchantModel],
        },
      ],
    });
    return {
      ...omit(booking.toJSON(), ['branch']),
      branch: booking.toJSON().branch,
      merchant: booking.toJSON().branch.merchant,
    };
  }

  async findOne(dto: CommonProto.QueryRequest) {
    const where = !isEmpty(dto.where) ? JSON.parse(dto.where) : undefined;

    const result = await this.bookingRepository.findOne({
      ...dto,
      where,
      raw: true,
    });

    return result;
  }

  async delete(id: number): Promise<number> {
    const count = await this.bookingRepository.delete({
      where: { id },
    });

    return count;
  }

  async update(request: BookingProto.UpdateBookingInput) {
    const result = await this.bookingRepository.update(request.data, {
      where: {
        id: request.id,
      },
    });

    if (
      request.data.status === EBookingStatus.BOOKING_APPROVE ||
      request.data.status === EBookingStatus.BOOKING_REJECT
    ) {
      await Promise.all([
        this.bullQueueProvider.addNotificationEvent(EBullEvent.ADMIN_RESPONSE_BOOKING, {
          userId: result[0]?.userId,
          status: request.data.status,
          merchantId: result[0]?.merchantId,
          branchId: result[0]?.branchId,
        }),
        this.bullQueueProvider.addGatewayEvent(EBullEvent.ADMIN_RESPONSE_BOOKING, {
          userId: result[0]?.userId,
          status: request.data.status,
          merchantId: result[0]?.merchantId,
          branchId: result[0]?.branchId,
        }),
      ]);
    }

    return result[0];
  }

  async count(query: CommonProto.QueryRequest): Promise<number> {
    const result = await this.bookingRepository.count({
      where: query.where ? JSON.parse(query.where) : null,
    });

    return result;
  }
}
