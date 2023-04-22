import { join } from 'path';
import { cwd } from 'process';

import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable, Logger } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import * as depthLimit from 'graphql-depth-limit';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory<ApolloDriverConfig> {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private configService: ConfigService) {}
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
      validationRules: [
        depthLimit(
          this.configService.get<number>('GRAPHQL_DEPTH_LIMIT'),
          { ignore: [/_trusted$/, 'idontcare'] },
          (depths) => {
            if (depths[''] === this.configService.get<number>('GRAPHQL_DEPTH_LIMIT') - 1) {
              this.logger.warn(
                `⚠️  You can only descend ${this.configService.get<number>('GRAPHQL_DEPTH_LIMIT')} levels.`,
                'GraphQL',
                false,
              );
            }
          },
        ),
      ],
    };
  }
}
