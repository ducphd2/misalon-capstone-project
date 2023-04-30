export class BaseType {
  id: number;

  createdAt?: string;

  updatedAt?: string;

  deletedAt?: string;

  createdBy?: string;

  updatedBy?: string;

  deletedBy?: string;
}

export class PageMeta {
  total?: number;

  totalPage?: number;

  page?: number;

  limit?: number;
}
