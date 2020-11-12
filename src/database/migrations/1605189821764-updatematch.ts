import { MigrationInterface, QueryRunner } from 'typeorm'

export class updatematch1605189821764 implements MigrationInterface {
  name = 'updatematch1605189821764'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "matchs" ALTER COLUMN "status" DROP NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ALTER COLUMN "local" DROP NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ALTER COLUMN "score" DROP NOT NULL`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "matchs" ALTER COLUMN "score" SET NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ALTER COLUMN "local" SET NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ALTER COLUMN "status" SET NOT NULL`,
    )
  }
}
