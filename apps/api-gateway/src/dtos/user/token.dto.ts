import { Property } from '@libs/core';

import { BaseDto } from '../base/base.dto';

export class TokenDto extends BaseDto<object> {
  @Property()
  lang: string;
}
