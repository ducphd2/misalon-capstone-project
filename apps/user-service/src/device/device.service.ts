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
    // let device = await this.deviceRepository.findOne({
    //   userId: dto.userId,
    //   deviceId: dto.deviceId,
    //   os: dto.os,
    // });

    // if (isEmpty(device)) {
    //   device = await this.create(dto);
    // } else {
    //   await this.deviceRepository.update(device.id, { token: dto.token });
    //   device = await this.findById(device.id);
    // }

    // return device;
    return;
  }
}
