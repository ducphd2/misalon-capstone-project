import { Injectable } from '@nestjs/common';
import { I18nService, TranslateOptions } from 'nestjs-i18n';

@Injectable()
export class MessageComponent {
  constructor(private readonly i18n: I18nService) {}

  lang(key: string, options: TranslateOptions = {}): string {
    return this.i18n.translate(key, options);
  }
}
