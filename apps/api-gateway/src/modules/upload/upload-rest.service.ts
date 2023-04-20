import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';
import { createReadStream } from 'streamifier';
import { ConfigService } from '@nestjs/config';

import { IUploadCloudinaryResponse } from '@/api-gateway/interfaces';

@Injectable()
export class UploadRestService {
  constructor(configService: ConfigService) {
    v2.config({
      cloud_name: configService.get<string>('CLD_CLOUD_NAME'),
      api_key: configService.get<string>('CLD_API_KEY'),
      api_secret: configService.get<string>('CLD_API_SECRET'),
    });
  }

  private async uploadToCloudinary(file: Express.Multer.File): Promise<IUploadCloudinaryResponse> {
    return new Promise((resolve, reject) => {
      const cld_upload_stream = v2.uploader.upload_stream(
        {
          resource_type: 'auto',
          use_filename: true,
        },
        (error: any, result: any) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        },
      );

      createReadStream(file.buffer).pipe(cld_upload_stream);
    }) as Promise<IUploadCloudinaryResponse>;
  }

  async uploadFiles(files: Array<Express.Multer.File>) {
    const data: string[] = [];

    for (const file of files) {
      const { url } = await this.uploadToCloudinary(file);
      data.push(url);
    }

    return data;
  }
}
