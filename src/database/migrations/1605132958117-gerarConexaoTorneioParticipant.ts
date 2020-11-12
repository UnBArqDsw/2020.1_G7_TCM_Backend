import { MigrationInterface, QueryRunner } from 'typeorm'

export class gerarConexaoTorneioParticipant1605132958117
  implements MigrationInterface {
  name = 'gerarConexaoTorneioParticipant1605132958117'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tournaments" DROP COLUMN "participants"`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ADD "tournamentsId" uuid`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ADD CONSTRAINT "FK_2c683792b0f228cc1ddfca39d0e" FOREIGN KEY ("tournamentsId") REFERENCES "tournaments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "participants" DROP CONSTRAINT "FK_2c683792b0f228cc1ddfca39d0e"`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" DROP COLUMN "tournamentsId"`,
    )
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD "participants" character varying array`,
    )
  }
}
