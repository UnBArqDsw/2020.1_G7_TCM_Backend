import { MigrationInterface, QueryRunner } from 'typeorm'

export class gerarTabelas1605100554465 implements MigrationInterface {
  name = 'gerarTabelas1605100554465'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tournaments" DROP COLUMN "solicitation"`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD "solicitation" character varying array NOT NULL`,
    )
  }
}
