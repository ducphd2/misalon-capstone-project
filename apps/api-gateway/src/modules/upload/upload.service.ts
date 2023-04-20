import { Readable } from 'stream';

import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';
// import toStream = require('buffer-to-stream');
import * as toStream from 'buffer-to-stream';

@Injectable()
export class UploadService {
  async uploadSingleToCloudinaryGraphql(args: any): Promise<any> {
    const { createReadStream } = await args.file;
    const buffer = await this.streamToBuffer(createReadStream());
    return this.toCloudinary(buffer, args.folder);
  }

  async uploadMultipleToCloudinaryGraphql(args: any): Promise<any> {
    try {
      const arrayResponse: any[] = [];
      await Promise.all(
        args.files.map(async (file: any) => {
          const result = await this.uploadSingleToCloudinaryGraphql({ file });
          arrayResponse.push(result);
        }),
      );
      return arrayResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async streamToBuffer(stream: Readable): Promise<Buffer> {
    const buffer: Uint8Array[] = [];

    return new Promise((resolve, reject) =>
      stream
        .on('error', (error) => reject(error))
        .on('data', (data) => buffer.push(data))
        .on('end', () => resolve(Buffer.concat(buffer))),
    );
  }

  async toCloudinary(buffer: Buffer, folder = 'development') {
    return await new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream({ folder }, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      toStream(buffer).pipe(upload);
    });
  }
}
