import { MigrationInterface, QueryRunner } from 'typeorm'

export class statusdefault1605230698155 implements MigrationInterface {
  name = 'statusdefault1605230698155'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tournaments" ALTER COLUMN "status" SET DEFAULT false`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tournaments" ALTER COLUMN "status" DROP DEFAULT`,
    )
  }
}
