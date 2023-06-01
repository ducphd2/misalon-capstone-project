import { LIMIT, PAGE } from '@libs/core';
import { CommonProto } from '@libs/grpc-types';
import { IPaginationRes } from '@libs/interfaces';
import { isEmpty } from 'lodash';
import { CountOptions, CreateOptions, FindAndCountOptions, FindOptions, UpdateOptions, WhereOptions } from 'sequelize';
import { Model, Repository } from 'sequelize-typescript';

export class BaseRepository<T extends Model> {
  constructor(readonly model: Repository<T>) {}

  async find(options?: FindOptions<T>): Promise<T[]> {
    return await this.model.findAll(options);
  }

  async findOne(options?: FindOptions<T>): Promise<T> {
    return await this.model.findOne(options);
  }

  async findById(id: number, options?: FindOptions<T>): Promise<T> {
    return await this.model.findByPk(id, options);
  }

  async paginate(
    options?: WhereOptions<T>,
    page = PAGE,
    limit = LIMIT,
    opts?: FindOptions<T>,
  ): Promise<IPaginationRes<T>> {
    const offset = (page - 1) * limit;
    const { rows, count } = await this.rawPaginate({
      where: { ...options },
      offset,
      limit,
      ...opts,
    });

    return {
      items: rows,
      meta: {
        total: count,
        totalPage: Math.ceil(count / LIMIT),
        page,
        limit,
      },
    } as IPaginationRes<T>;
  }

  async rawPaginate(options: FindAndCountOptions): Promise<{
    rows: T[];
    count: number;
  }> {
    return await this.model.findAndCountAll(options);
  }

  async create(entity: any, opts?: CreateOptions): Promise<T> {
    const res = await this.model.create(entity, opts);
    return res.toJSON();
  }

  async update(entity: any, opts?: UpdateOptions) {
    const [affectedCount, affectedRows] = await this.model.update(entity, {
      ...opts,
      returning: true,
    });
    return affectedRows;
  }

  async delete(conditions: FindOptions<T>): Promise<number> {
    return await this.model.destroy(conditions);
  }

  async raw(query: string) {
    return await this.model.sequelize.query(query);
  }

  getModel(): Repository<T> {
    return this.model;
  }

  async count(options?: CountOptions): Promise<number> {
    const result: number = await this.model.count(options);
    return result;
  }

  async findAndPaginate(request: CommonProto.QueryRequest, opts?: FindOptions): Promise<IPaginationRes<T>> {
    const result: IPaginationRes<T> = await this.paginate(
      request.where as unknown as WhereOptions,
      request.page,
      request.limit,
      opts,
    );

    return result;
  }

  async countByGrpc(query: CommonProto.QueryRequest) {
    const where = !isEmpty(query.where) ? JSON.parse(query.where) : undefined;

    const result = await this.count({
      ...query,
      where,
    });

    return result;
  }

  async upsert(entity: any, opts?: CreateOptions): Promise<[T, boolean]> {
    const response = await this.model.upsert(entity, opts);
    return response;
  }
}
