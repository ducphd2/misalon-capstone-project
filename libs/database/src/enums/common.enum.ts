import { registerEnumType } from '@nestjs/graphql';

export enum EOrderDirection {
  ASC = 0,
  DESC = 1,
}

registerEnumType(EOrderDirection, {
  name: 'EOrderDirection',
});
