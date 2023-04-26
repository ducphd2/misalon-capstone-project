import { Controller, HttpException, HttpStatus, Logger, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

import { UploadRestService } from './upload-rest.service';

@Controller('file')
export class UploadController {
  private readonly logger = new Logger(this.constructor.name);
  constructor(private readonly uploadService: UploadRestService) {}

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    try {
      if (!files.length) {
        throw new HttpException('File not found', HttpStatus.BAD_REQUEST);
      }
      const result = await this.uploadService.uploadFiles(files);
      return result;
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException('Upload file failed', HttpStatus.BAD_REQUEST);
    }
  }
}
