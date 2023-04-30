import { BookingRepository } from '@libs/database';
import { BookingProto, CommonProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';

@Injectable()
export class BookingService {
  constructor(private readonly bookingRepository: BookingRepository) {}

  async create(dto: BookingProto.CreateBookingInput) {
    const booking = await this.bookingRepository.create(dto);
    return booking;
  }

  async find(request: CommonProto.QueryRequest) {
    const merchants = await this.bookingRepository.find(JSON.parse(request.where));
    return merchants;
  }

  async findWithPaging(request: CommonProto.QueryRequest) {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.bookingRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result;
  }

  async findById(id: number) {
    const merchant = await this.bookingRepository.findById(id);
    return merchant;
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
}
