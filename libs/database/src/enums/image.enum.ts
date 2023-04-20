import { registerEnumType } from '@nestjs/graphql';

export enum EServeImageType {
  MERCHANT = 0,
  BRANCH = 1,
  GROUP = 2,
  SERVICE = 3,
}

registerEnumType(EServeImageType, {
  name: 'EServeImageType',
});

export enum EImageType {
  PHOTO = 0,
  VIDEO = 1,
}

registerEnumType(EImageType, {
  name: 'EImageType',
});
