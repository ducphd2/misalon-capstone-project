import { registerEnumType } from '@nestjs/graphql';

export enum EDeviceOs {
  ANDROID = 0,
  IOS = 1,
}

registerEnumType(EDeviceOs, {
  name: 'EDeviceOs',
});
