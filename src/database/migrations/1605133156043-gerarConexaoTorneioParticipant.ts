import { MigrationInterface, QueryRunner } from 'typeorm'

export class gerarConexaoTorneioParticipant1605133156043
  implements MigrationInterface {
  name = 'gerarConexaoTorneioParticipant1605133156043'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "tournament_points" DROP NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "win_count" DROP NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "loss_count" DROP NOT NULL`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "loss_count" SET NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "win_count" SET NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "tournament_points" SET NOT NULL`,
    )
  }
}
