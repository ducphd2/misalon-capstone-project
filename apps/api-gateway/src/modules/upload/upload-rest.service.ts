import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { v2 } from 'cloudinary';
import { createReadStream } from 'streamifier';

import { IUploadCloudinaryResponse } from '@/api-gateway/interfaces';

@Injectable()
export class UploadRestService {
  private S3: S3;
  private bucket: string;

  constructor(private readonly configService: ConfigService) {
    v2.config({
      cloud_name: this.configService.get<string>('CLD_CLOUD_NAME'),
      api_key: this.configService.get<string>('CLD_API_KEY'),
      api_secret: this.configService.get<string>('CLD_API_SECRET'),
    });

    this.S3 = new S3({
      accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY'),
      secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
      region: this.configService.get<string>('AWS_REGION'),
    });

    this.bucket = this.configService.get<string>('AWS_S3_BUCKET_NAME');
  }

  async uploadFile(file: Express.Multer.File): Promise<S3.ManagedUpload.SendData> {
    const params = {
      ContentType: file.mimetype,
      Bucket: this.bucket,
      Key: file.originalname,
      Body: file.buffer,
      ACL: 'public-read',
      ContentDisposition: `filename=${file.originalname}`,
    };

    const uploadedBlob = await this.S3.upload(params).promise();

    return uploadedBlob;
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
    const result = await Promise.all(
      files.map(async (file: Express.Multer.File) => {
        const manageUpload = await this.uploadFile(file);

        return {
          url: manageUpload.Location,
          key: manageUpload.Key,
        };
      }),
    );

    return result;
  }
}
