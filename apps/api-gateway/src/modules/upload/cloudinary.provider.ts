import { v2 } from 'cloudinary';
import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const CLOUDINARY = 'Cloudinary';

export const CloudinaryProvider: Provider = {
  provide: CLOUDINARY,
  inject: [ConfigService],
  useFactory: (configService: ConfigService): any => {
    return v2.config({
      cloud_name: configService.get<string>('CLD_CLOUD_NAME'),
      api_key: configService.get<string>('CLD_API_KEY'),
      api_secret: configService.get<string>('CLD_API_SECRET'),
    });
  },
};
