import { Module } from '@nestjs/common';

import { UploadService } from './upload.service';
import { UploadResolver } from './upload.resolver';
import { CloudinaryProvider } from './cloudinary.provider';

import { UploadRestService } from '@/api-gateway/modules/upload/upload-rest.service';
import { UploadController } from '@/api-gateway/modules/upload/upload.controller';

@Module({
  providers: [CloudinaryProvider, UploadService, UploadResolver, UploadRestService],
  controllers: [UploadController],
  exports: [CloudinaryProvider, UploadService, UploadRestService],
})
export class UploadModule {}
