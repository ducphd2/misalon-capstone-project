import { LIMIT } from '@libs/core/constants';
import { BaseEntity } from '@libs/database/entities/base.entity';
import { instanceToPlain } from 'class-transformer';
import { IPaginationMeta, IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import {
  DeepPartial,
  DeleteResult,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
  Repository,
  SelectQueryBuilder,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class BaseRepository<Model extends BaseEntity> {
  constructor(protected readonly model: Repository<Model>) {
    this.model = model;
  }

  createModel(entity: DeepPartial<Model>): Model {
    return this.model.create(entity);
  }

  async create(entity: DeepPartial<Model>): Promise<Model> {
    const newModel = this.model.create(entity);
    return instanceToPlain(await this.model.save(newModel as DeepPartial<Model>)) as Model;
  }

  async createMultipleEntities(entities?: DeepPartial<Model>[]): Promise<Array<Model>> {
    return instanceToPlain(await this.model.save(entities)) as Array<Model>;
  }

  async findById(id: string | number, opts?: FindOneOptions<Model>): Promise<Model> {
    return instanceToPlain(await this.model.findOneOrFail(id, { ...opts })) as Model;
  }

  async findRaw(where: FindConditions<Model>, options: FindOneOptions<Model>): Promise<Model> {
    return await this.model.findOne({ ...options, where });
  }

  async findOneRaw(where: FindConditions<Model>, options?: FindOneOptions<Model>): Promise<Model> {
    return this.findRaw(where, options);
  }

  async findOne(where: FindConditions<Model>, options?: FindOneOptions<Model>): Promise<Model> {
    return instanceToPlain(this.findOneRaw(where, options)) as Model;
  }

  async findByIds(ids: any[], options?: FindManyOptions<Model>): Promise<Model[]> {
    return instanceToPlain(await this.model.findByIds(ids, options)) as Model[];
  }

  async findAndCount(conditions?: FindManyOptions<Model>): Promise<[Model[], number]> {
    const [items, count] = await this.model.findAndCount(conditions);
    return [instanceToPlain(items) as Model[], count];
  }

  async count(options?: FindManyOptions<Model>): Promise<number> {
    const count = await this.model.count(options);
    return count;
  }

  async find(conditions: FindConditions<Model>, options?: FindManyOptions<Model>): Promise<Model[]> {
    return instanceToPlain(await this.model.find({ where: conditions, ...options })) as Model[];
  }

  async findCustom(options?: FindManyOptions<Model>): Promise<Model[]> {
    return instanceToPlain(await this.model.find({ ...options })) as Model[];
  }

  async findWithPagination(
    conditions: FindConditions<Model>,
    options?: FindManyOptions<Model>,
  ): Promise<{ totalPage: number; payload: Model[] }> {
    const results = instanceToPlain(await this.model.findAndCount({ where: conditions, ...options }));
    return {
      totalPage: Math.ceil(results[1] / (options.take ?? LIMIT)),
      payload: results[0],
    };
  }

  async updateItem(entity: DeepPartial<Model>): Promise<Model> {
    return instanceToPlain(await this.model.save(entity)) as Model;
  }

  async update(id: string | number, entity: QueryDeepPartialEntity<Model>): Promise<UpdateResult> {
    return await this.model.update(id, entity);
  }

  async updateByConditions(
    conditions: FindConditions<Model>,
    entity: QueryDeepPartialEntity<Model>,
  ): Promise<UpdateResult> {
    return await this.model.update(conditions, entity);
  }

  merge(oldEntity: Model, entity: DeepPartial<Model>): Model {
    return instanceToPlain(this.model.merge(oldEntity, entity)) as Model;
  }
  async preload(entity: DeepPartial<Model>): Promise<Model> {
    return instanceToPlain(await this.model.preload(entity)) as Model;
  }
  async save(entity: DeepPartial<Model>): Promise<Model> {
    return instanceToPlain(await this.model.save(entity)) as Model;
  }

  async removeItem(
    criteria: string | string[] | number | number[] | Date | Date[] | FindConditions<Model>,
  ): Promise<DeleteResult> {
    return this.model.delete(criteria);
  }

  async softDeleteItem(entity: FindConditions<Model>): Promise<UpdateResult> {
    return this.model.softDelete(entity);
  }

  async paginationRepository(
    repository: Repository<Model>,
    options: IPaginationOptions,
    searchOptions?: FindConditions<Model> | FindManyOptions<Model>,
  ): Promise<Pagination<Model, IPaginationMeta>> {
    const { items, meta } = await paginate(repository, options, searchOptions);
    return {
      items: instanceToPlain(items) as any,
      meta,
    };
  }

  async paginationQueryBuilder(
    queryBuilder: SelectQueryBuilder<Model>,
    options: IPaginationOptions,
  ): Promise<Pagination<Model, IPaginationMeta>> {
    const pgResult = await paginate(queryBuilder, options);
    return {
      ...pgResult,
      items: instanceToPlain(pgResult.items) as any,
    };
  }

  getModel(): Repository<Model> {
    return this.model;
  }
}
