import { DeviceEntity } from '@libs/database/entities';
import { DeviceRepository } from '@libs/database/repositories';
import { CommonProto, DeviceProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';

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

  async find(dto: CommonProto.QueryRequest): Promise<DeviceEntity[]> {
    const devices = await this.deviceRepository.find(JSON.parse(dto.where), {
      skip: dto.limit * (dto.page - 1),
      take: dto.limit,
    });
    return devices;
  }
}
