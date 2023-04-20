import { join } from 'path';
import { cwd } from 'process';

import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory<ApolloDriverConfig> {
  createGqlOptions(): Promise<ApolloDriverConfig> | ApolloDriverConfig {
    return {
      autoSchemaFile: join(cwd(), 'apps/api-gateway/src/schema.gql'),
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
      context: ({ req, res }) => {
        return { req, res };
      },
      installSubscriptionHandlers: true,
    };
  }
}
