import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { UploadService } from './upload.service';

import { SingleUpload, UploadInputArgs, UploadMultipleInputArgs } from '@/api-gateway/types';

@Resolver()
export class UploadResolver {
  constructor(private readonly uploadService: UploadService) {}

  @Mutation(() => SingleUpload)
  async uploadSingleFiles(@Args() args: UploadInputArgs): Promise<any> {
    return this.uploadService.uploadSingleToCloudinaryGraphql(args);
  }

  @Mutation(() => [SingleUpload])
  async uploadMultipleFiles(@Args() args: UploadMultipleInputArgs): Promise<any> {
    return this.uploadService.uploadMultipleToCloudinaryGraphql(args);
  }
}
