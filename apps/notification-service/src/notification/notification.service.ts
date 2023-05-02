import { NotificationRepository } from '@libs/database';
import { CommonProto, NotificationProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';

@Injectable()
export class NotificationService {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  async create(request: NotificationProto.CreateNotificationInput) {
    const booking = await this.notificationRepository.create(request);
    return booking;
  }

  async find(request: CommonProto.QueryRequest) {
    const merchants = await this.notificationRepository.find(JSON.parse(request.where));
    return merchants;
  }

  async findWithPaging(request: CommonProto.QueryRequest) {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.notificationRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result;
  }

  async findById(id: number) {
    const merchant = await this.notificationRepository.findById(id);
    return merchant;
  }

  async findOne(dto: CommonProto.QueryRequest) {
    const where = !isEmpty(dto.where) ? JSON.parse(dto.where) : undefined;

    const result = await this.notificationRepository.findOne({
      ...dto,
      where,
      raw: true,
    });

    return result;
  }

  async sendCustomerMail() {
    //
  }
}
