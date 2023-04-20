import { ObjectType, Field, ArgsType } from '@nestjs/graphql';
import { GraphQLUpload, Upload } from 'graphql-upload-minimal';
import { IsString } from 'class-validator';

@ObjectType()
export class SingleUpload {
  @Field(() => String)
  url!: string;

  @Field(() => String)
  format!: string;

  @Field(() => String)
  folder!: string;

  @Field(() => Number)
  width!: number;

  @Field(() => Number)
  height!: number;

  @Field(() => Number)
  bytes!: number;
}

@ArgsType()
export class UploadInputArgs {
  @Field(() => GraphQLUpload)
  file!: Promise<Upload>;

  @Field(() => String, { nullable: true })
  @IsString()
  folder?: string;
}

@ArgsType()
export class UploadMultipleInputArgs {
  @Field(() => String, { nullable: true })
  @IsString()
  folder?: string;

  @Field(() => [GraphQLUpload])
  files!: Promise<[Upload]>;
}
