export interface IQuery {
  select?: string[];
  where?: string;
  orderBy?: string[];
  limit?: number;
}

export interface IPaginationMeta {
  totalPage: number;
  total: number;
  page: number;
  limit: number;
}

export interface IPaginationRes<T> {
  items: T[];
  meta: IPaginationMeta;
}
