import { DeviceModel } from '@libs/database/entities';
import { DeviceRepository } from '@libs/database/repositories';
import { CommonProto, DeviceProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';

@Injectable()
export class DeviceService {
  constructor(private readonly deviceRepository: DeviceRepository) {}

  async create(dto: DeviceProto.CreateDeviceInput): Promise<DeviceModel> {
    const device = await this.deviceRepository.create(dto);
    return device;
  }

  async findById(id: number): Promise<DeviceModel> {
    const device = await this.deviceRepository.findById(id);
    return device;
  }

  async find(request: CommonProto.QueryRequest): Promise<any> {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.deviceRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result;
  }

  async upsertDevice(dto: DeviceProto.CreateDeviceInput): Promise<DeviceModel> {
    let device = await this.deviceRepository.findOne({
      where: {
        deviceId: dto.deviceId,
        os: dto.os,
        userId: dto.userId,
      },
    });

    if (isEmpty(device)) {
      device = await this.create(dto);
    } else {
      const updateResult = await this.deviceRepository.update({ token: dto.token }, { where: { id: device.id } });
      device = updateResult[0];
    }

    return device;
  }
}
