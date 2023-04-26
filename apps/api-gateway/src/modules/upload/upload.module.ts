import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UploadService } from './upload.service';
import { UploadResolver } from './upload.resolver';
import { CloudinaryProvider } from './cloudinary.provider';

import { UploadRestService } from '@/api-gateway/modules/upload/upload-rest.service';
import { UploadController } from '@/api-gateway/modules/upload/upload.controller';

@Module({
  providers: [ConfigModule, CloudinaryProvider, UploadService, UploadResolver, UploadRestService],
  controllers: [UploadController],
  exports: [CloudinaryProvider, UploadService, UploadRestService],
})
export class UploadModule {}
