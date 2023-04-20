import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

export class SnakeNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
  tableName(targetName: string, userSpecifiedName: string): string {
    return userSpecifiedName || snakeCase(targetName);
  }

  columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
    return (customName || snakeCase(propertyName)) + (embeddedPrefixes.length ? '_' + embeddedPrefixes.join('_') : '');
  }

  relationName(propertyName: string): string {
    return snakeCase(propertyName);
  }
}

export const snakeNamingStrategy = new SnakeNamingStrategy();

export const baseConfig = {
  synchronize: true,
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.MYSQL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  migrations: ['src/db/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  namingStrategy: snakeNamingStrategy,
};
