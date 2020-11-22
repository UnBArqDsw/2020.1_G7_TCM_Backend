import { MigrationInterface, QueryRunner } from 'typeorm'

export class teste1606008292482 implements MigrationInterface {
  name = 'teste1606008292482'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "FK_71c69d3de11a76e89adbd4d1b78"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "FK_934adc576711808e9d46e340ae9"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "FK_1dce311b1355121bf2e0a0326f7"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "FK_2b783d7f3945a36c4ae6c298f04"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "FK_9cc9a8bc752ae84d7e090a00408"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "FK_9438fe26af810b9a0aa00c39475"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "UQ_9438fe26af810b9a0aa00c39475"`,
    )
    await queryRunner.query(`ALTER TABLE "matchs" DROP COLUMN "user_winner_id"`)
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD "user_winner_id" character varying`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "UQ_9cc9a8bc752ae84d7e090a00408"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP COLUMN "participant_winner_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD "participant_winner_id" character varying`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "UQ_2b783d7f3945a36c4ae6c298f04"`,
    )
    await queryRunner.query(`ALTER TABLE "matchs" DROP COLUMN "player1_id"`)
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD "player1_id" character varying`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "UQ_1dce311b1355121bf2e0a0326f7"`,
    )
    await queryRunner.query(`ALTER TABLE "matchs" DROP COLUMN "player2_id"`)
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD "player2_id" character varying`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "UQ_934adc576711808e9d46e340ae9"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP COLUMN "participant1_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD "participant1_id" character varying`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "UQ_71c69d3de11a76e89adbd4d1b78"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP COLUMN "participant2_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD "participant2_id" character varying`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP COLUMN "participant2_id"`,
    )
    await queryRunner.query(`ALTER TABLE "matchs" ADD "participant2_id" uuid`)
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "UQ_71c69d3de11a76e89adbd4d1b78" UNIQUE ("participant2_id")`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP COLUMN "participant1_id"`,
    )
    await queryRunner.query(`ALTER TABLE "matchs" ADD "participant1_id" uuid`)
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "UQ_934adc576711808e9d46e340ae9" UNIQUE ("participant1_id")`,
    )
    await queryRunner.query(`ALTER TABLE "matchs" DROP COLUMN "player2_id"`)
    await queryRunner.query(`ALTER TABLE "matchs" ADD "player2_id" uuid`)
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "UQ_1dce311b1355121bf2e0a0326f7" UNIQUE ("player2_id")`,
    )
    await queryRunner.query(`ALTER TABLE "matchs" DROP COLUMN "player1_id"`)
    await queryRunner.query(`ALTER TABLE "matchs" ADD "player1_id" uuid`)
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "UQ_2b783d7f3945a36c4ae6c298f04" UNIQUE ("player1_id")`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP COLUMN "participant_winner_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD "participant_winner_id" uuid`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "UQ_9cc9a8bc752ae84d7e090a00408" UNIQUE ("participant_winner_id")`,
    )
    await queryRunner.query(`ALTER TABLE "matchs" DROP COLUMN "user_winner_id"`)
    await queryRunner.query(`ALTER TABLE "matchs" ADD "user_winner_id" uuid`)
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "UQ_9438fe26af810b9a0aa00c39475" UNIQUE ("user_winner_id")`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "FK_9438fe26af810b9a0aa00c39475" FOREIGN KEY ("user_winner_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "FK_9cc9a8bc752ae84d7e090a00408" FOREIGN KEY ("participant_winner_id") REFERENCES "participants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "FK_2b783d7f3945a36c4ae6c298f04" FOREIGN KEY ("player1_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "FK_1dce311b1355121bf2e0a0326f7" FOREIGN KEY ("player2_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "FK_934adc576711808e9d46e340ae9" FOREIGN KEY ("participant1_id") REFERENCES "participants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "FK_71c69d3de11a76e89adbd4d1b78" FOREIGN KEY ("participant2_id") REFERENCES "participants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }
}
