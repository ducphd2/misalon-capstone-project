import { Controller, HttpException, HttpStatus, Logger, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ErrorHelper } from '@libs/core';

import { UploadRestService } from './upload-rest.service';

@Controller('file')
export class UploadController {
  private readonly logger = new Logger(this.constructor.name);
  constructor(private readonly uploadService: UploadRestService) {}

  @Post('multiple')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    try {
      if (!files.length) {
        throw new HttpException('File not found', HttpStatus.BAD_REQUEST);
      }
      const data = await this.uploadService.uploadFiles(files);
      return { data };
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException('Upload file failed', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('single')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadSingleFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    try {
      if (!files.length) {
        ErrorHelper.HttpNotFoundException('File not found');
      }
      const data = await this.uploadService.uploadFile(files[0]);
      return { data };
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException('Upload file failed', HttpStatus.BAD_REQUEST);
    }
  }
}
