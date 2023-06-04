import { BranchModel, MerchantModel, ServiceModel } from '@libs/database/entities';
import { MerchantRepository, ServiceRepository } from '@libs/database/repositories';
import { CommonProto, ServiceProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { FindOptions, Sequelize } from 'sequelize';

@Injectable()
export class ServicesService {
  constructor(
    private readonly serviceRepository: ServiceRepository,
    private readonly merchantRepository: MerchantRepository,
  ) {}

  async create(dto: ServiceProto.CreateServiceInput): Promise<ServiceModel> {
    const merchant = await this.merchantRepository.findById(dto.merchantId);

    const service = await this.serviceRepository.create({
      ...dto,
      latitude: merchant.latitude,
      longitude: merchant.longitude,
    });

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
    const rawWhereQuery = !_.isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    if (rawWhereQuery?.userLat && rawWhereQuery?.userLng) {
      const baseRawQuery = _.omit(rawWhereQuery, ['userLat', 'userLng']);
      const attributes = Object.keys(ServiceModel.rawAttributes);

      const result = await this.serviceRepository.findAndPaginate(
        {
          ...request,
          where: baseRawQuery as unknown as any,
        },
        {
          include: [
            {
              model: MerchantModel,
              include: [BranchModel],
            },
          ],
          attributes: [
            ...attributes,
            [
              Sequelize.literal(
                `6371 * acos(cos(radians(${rawWhereQuery.userLat})) * cos(radians("service"."latitude")) * cos(radians(${rawWhereQuery.userLng}) - radians("service"."longitude")) + sin(radians(${rawWhereQuery.userLat})) * sin(radians("service"."latitude")))`,
              ),
              'distance',
            ],
          ],
          order: [[Sequelize.literal('distance'), 'ASC']],
        },
      );

      const a = result.items.map((item) => {
        return {
          ...item.toJSON(),
          distance: item?.toJSON().distance,
        };
      });

      return {
        items: a,
        meta: result.meta,
      };
    }

    const result = await this.serviceRepository.findAndPaginate(
      {
        ...request,
        where: rawWhereQuery,
      },
      {
        include: [
          {
            model: MerchantModel,
            include: [BranchModel],
          },
        ],
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
