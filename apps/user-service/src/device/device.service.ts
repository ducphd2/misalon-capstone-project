import { DeviceEntity } from '@libs/database/entities';
import { DeviceRepository } from '@libs/database/repositories';
import { CommonProto, DeviceProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import { IPaginationMeta, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class DeviceService {
  constructor(private readonly deviceRepository: DeviceRepository) {}

  async create(dto: DeviceProto.CreateDeviceInput): Promise<DeviceEntity> {
    const device = await this.deviceRepository.create(dto);
    return device;
  }

  async findById(dto: CommonProto.Id): Promise<DeviceEntity> {
    const device = await this.deviceRepository.findById(dto.id);
    return device;
  }

  async find(dto: CommonProto.QueryRequest): Promise<Pagination<DeviceEntity, IPaginationMeta>> {
    const devices = await this.deviceRepository.findWithPaging(
      {
        page: dto?.page,
        limit: dto.limit || 10,
      },
      {
        where: JSON.parse(dto.where) ?? undefined,
      },
    );

    return devices;
  }
}
