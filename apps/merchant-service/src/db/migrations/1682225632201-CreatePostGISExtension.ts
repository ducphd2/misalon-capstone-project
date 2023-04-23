import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePostGISExtension1682224316703 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS postgis;');
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS postgis_topology;');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP EXTENSION IF EXISTS postgis;');
    await queryRunner.query('DROP EXTENSION IF EXISTS postgis_topology;');
  }
}
