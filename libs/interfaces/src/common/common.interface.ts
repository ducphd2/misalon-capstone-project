export interface IModelConnection<T> {
  edges: IModelEdge<T>[];
  pageInfo: IPageInfo;
}

export interface IModelEdge<T> {
  node: T;
  cursor: string;
}

export interface IPageInfo {
  startCursor?: string;
  endCursor?: string;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

export interface IId {
  id: number;
}

export interface IQuery {
  select?: string[];
  where?: string;
  orderBy?: string[];
  limit?: number;
  before?: string;
  after?: string;
}

export interface ICount {
  count: number;
}

export interface IErrorPayload {
  field?: string;
  message?: string[];
}

export interface IQueryV2 {
  select?: string[];
  where?: string;
  limit?: number;
  before?: string;
  after?: string;
  page?: number;
  orderBy?: string;
  orderDirection?: string;
  searchKey?: string;
}
