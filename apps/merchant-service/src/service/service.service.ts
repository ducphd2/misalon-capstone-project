import { MerchantModel, ServiceModel } from '@libs/database/entities';
import { ServiceRepository } from '@libs/database/repositories';
import { CommonProto, ServiceProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';
import { FindOptions } from 'sequelize';

@Injectable()
export class ServicesService {
  constructor(private readonly serviceRepository: ServiceRepository) {}

  async create(dto: ServiceProto.CreateServiceInput): Promise<ServiceModel> {
    const service = await this.serviceRepository.create(dto);

    return service;
  }

  async find(request: CommonProto.QueryRequest): Promise<ServiceModel[]> {
    const services = await this.serviceRepository.find(JSON.parse(request.where));

    return services;
  }

  async findOne(query: FindOptions): Promise<ServiceModel> {
    const result: ServiceModel = await this.serviceRepository.findOne({
      ...query,
      raw: true,
    });

    return result;
  }

  async findWithPaging(request: CommonProto.QueryRequest): Promise<any> {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.serviceRepository.findAndPaginate(
      {
        ...request,
        where: baseWhereQuery,
      },
      {
        include: [MerchantModel],
        raw: true,
        nest: true,
      },
    );

    return result;
  }

  async update(request: ServiceProto.UpdateServiceInput): Promise<ServiceModel> {
    const result = await this.serviceRepository.update(request.data, {
      where: {
        id: request.id,
      },
    });
    return result[0];
  }

  async findById(id: number): Promise<ServiceModel> {
    const result = await this.serviceRepository.findById(id, {
      raw: true,
    });

    return result;
  }

  async delete(id: number): Promise<number> {
    return await this.serviceRepository.delete({ where: { id } });
  }

  async count(request: CommonProto.QueryRequest): Promise<number> {
    const count = await this.serviceRepository.count({
      where: JSON.parse(request.where),
    });

    return count;
  }
}
