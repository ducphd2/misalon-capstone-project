import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddSearchColumnToUserTable1682219455328 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "users" DROP COLUMN "search";
      ALTER TABLE "users"
      ADD COLUMN "search" tsvector GENERATED ALWAYS AS (
        to_tsvector('english', coalesce(email, '') || ' ' || coalesce(full_name, '') || ' ' || coalesce(contact, '') || ' ' || coalesce(phone_number, '') || ' ' || coalesce(address, ''))
      ) STORED;
    `);

    await queryRunner.query(`CREATE INDEX "user_search_idx" ON "users" USING gin("search");`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX IF EXISTS "user_search_idx"`);
    await queryRunner.dropColumn('users', 'search');
    await queryRunner.addColumn('users', new TableColumn({ name: 'search', type: 'tsvector', isNullable: true }));
  }
}
