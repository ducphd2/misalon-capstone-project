import { FeedbackModel } from '@libs/database/entities';
import { FeedbackRepository } from '@libs/database/repositories';
import { CommonProto, FeedbackProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';
import { FindOptions } from 'sequelize';

@Injectable()
export class FeedbackService {
  constructor(private readonly feedbackRepository: FeedbackRepository) {}

  async create(dto: FeedbackProto.CreateInput): Promise<FeedbackModel> {
    const service = await this.feedbackRepository.create(dto);

    return service;
  }

  async find(request: CommonProto.QueryRequest): Promise<FeedbackModel[]> {
    const services = await this.feedbackRepository.find(JSON.parse(request.where));

    return services;
  }

  async findOne(query: FindOptions): Promise<FeedbackModel> {
    const result: FeedbackModel = await this.feedbackRepository.findOne({
      ...query,
      raw: true,
    });

    return result;
  }

  async findWithPaging(request: CommonProto.QueryRequest): Promise<any> {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.feedbackRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result;
  }

  async update(request: FeedbackProto.UpdateInput): Promise<FeedbackModel> {
    const result = await this.feedbackRepository.update(request.data, {
      where: {
        id: request.id,
      },
    });
    return result[0];
  }

  async findById(id: number): Promise<FeedbackModel> {
    const result = await this.feedbackRepository.findById(id, {
      raw: true,
    });

    return result;
  }

  async delete(id: number): Promise<number> {
    return await this.feedbackRepository.delete({ where: { id } });
  }
}
