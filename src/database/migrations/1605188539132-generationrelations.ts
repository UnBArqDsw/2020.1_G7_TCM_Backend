import { MigrationInterface, QueryRunner } from 'typeorm'

export class generationrelations1605188539132 implements MigrationInterface {
  name = 'generationrelations1605188539132'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tournaments" DROP COLUMN "manager"`)
    await queryRunner.query(
      `ALTER TABLE "participants" ADD "tournamentsId" uuid`,
    )
    await queryRunner.query(
      `ALTER TABLE "solicitations" ADD "tournamentsId" uuid`,
    )
    await queryRunner.query(`ALTER TABLE "rounds" ADD "tournamentsId" uuid`)
    await queryRunner.query(`ALTER TABLE "tournaments" ADD "managerId" uuid`)
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "status" DROP DEFAULT`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" DROP COLUMN "participant_type"`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ADD "participant_type" character varying NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "participants" DROP COLUMN "players"`)
    await queryRunner.query(
      `ALTER TABLE "participants" ADD "players" character varying NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "tournament_points" DROP NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "win_count" DROP NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "loss_count" DROP NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" DROP COLUMN "created_at"`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" DROP COLUMN "updated_at"`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`,
    )
    await queryRunner.query(
      `ALTER TABLE "solicitations" ADD CONSTRAINT "UQ_fd585d8adbbb553d3644cdda687" UNIQUE ("user")`,
    )
    await queryRunner.query(
      `ALTER TABLE "tournaments" DROP COLUMN "description"`,
    )
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD "description" character varying NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "tournaments" DROP COLUMN "type"`)
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD "type" character varying NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "tournaments" DROP COLUMN "rules"`)
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD "rules" character varying NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "tournaments" DROP COLUMN "start_date"`,
    )
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD "start_date" TIMESTAMP NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "tournaments" DROP COLUMN "end_date"`)
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD "end_date" TIMESTAMP NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "UQ_ad02a1be8707004cb805a4b5023"`,
    )
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`,
    )
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthday"`)
    await queryRunner.query(
      `ALTER TABLE "users" ADD "birthday" TIMESTAMP NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "matchs" DROP COLUMN "status"`)
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD "status" character varying NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ALTER COLUMN "local" SET NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ALTER COLUMN "score" SET NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "UQ_9438fe26af810b9a0aa00c39475" UNIQUE ("user_winner_id")`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "UQ_9cc9a8bc752ae84d7e090a00408" UNIQUE ("participant_winner_id")`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "UQ_2b783d7f3945a36c4ae6c298f04" UNIQUE ("player1_id")`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "UQ_1dce311b1355121bf2e0a0326f7" UNIQUE ("player2_id")`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "UQ_934adc576711808e9d46e340ae9" UNIQUE ("participant1_id")`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD CONSTRAINT "UQ_71c69d3de11a76e89adbd4d1b78" UNIQUE ("participant2_id")`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ADD CONSTRAINT "FK_2c683792b0f228cc1ddfca39d0e" FOREIGN KEY ("tournamentsId") REFERENCES "tournaments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "solicitations" ADD CONSTRAINT "FK_fd585d8adbbb553d3644cdda687" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "solicitations" ADD CONSTRAINT "FK_254ff8be429cba68f539d072d2f" FOREIGN KEY ("tournamentsId") REFERENCES "tournaments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "rounds" ADD CONSTRAINT "FK_e127d61dc623056b9015c66e8fe" FOREIGN KEY ("tournamentsId") REFERENCES "tournaments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD CONSTRAINT "FK_3161e55bf7351d0ebb931128781" FOREIGN KEY ("managerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
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

  public async down(queryRunner: QueryRunner): Promise<void> {
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
      `ALTER TABLE "tournaments" DROP CONSTRAINT "FK_3161e55bf7351d0ebb931128781"`,
    )
    await queryRunner.query(
      `ALTER TABLE "rounds" DROP CONSTRAINT "FK_e127d61dc623056b9015c66e8fe"`,
    )
    await queryRunner.query(
      `ALTER TABLE "solicitations" DROP CONSTRAINT "FK_254ff8be429cba68f539d072d2f"`,
    )
    await queryRunner.query(
      `ALTER TABLE "solicitations" DROP CONSTRAINT "FK_fd585d8adbbb553d3644cdda687"`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" DROP CONSTRAINT "FK_2c683792b0f228cc1ddfca39d0e"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "UQ_71c69d3de11a76e89adbd4d1b78"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "UQ_934adc576711808e9d46e340ae9"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "UQ_1dce311b1355121bf2e0a0326f7"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "UQ_2b783d7f3945a36c4ae6c298f04"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "UQ_9cc9a8bc752ae84d7e090a00408"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" DROP CONSTRAINT "UQ_9438fe26af810b9a0aa00c39475"`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ALTER COLUMN "score" DROP NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "matchs" ALTER COLUMN "local" DROP NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "matchs" DROP COLUMN "status"`)
    await queryRunner.query(
      `ALTER TABLE "matchs" ADD "status" character NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthday"`)
    await queryRunner.query(`ALTER TABLE "users" ADD "birthday" date NOT NULL`)
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`,
    )
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "UQ_ad02a1be8707004cb805a4b5023" UNIQUE ("nickname")`,
    )
    await queryRunner.query(`ALTER TABLE "tournaments" DROP COLUMN "end_date"`)
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD "end_date" date NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "tournaments" DROP COLUMN "start_date"`,
    )
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD "start_date" date NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "tournaments" DROP COLUMN "rules"`)
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD "rules" text NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "tournaments" DROP COLUMN "type"`)
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD "type" character NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "tournaments" DROP COLUMN "description"`,
    )
    await queryRunner.query(
      `ALTER TABLE "tournaments" ADD "description" text NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "solicitations" DROP CONSTRAINT "UQ_fd585d8adbbb553d3644cdda687"`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" DROP COLUMN "updated_at"`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ADD "updated_at" date NOT NULL DEFAULT now()`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" DROP COLUMN "created_at"`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ADD "created_at" date NOT NULL DEFAULT now()`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "loss_count" SET NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "win_count" SET NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "tournament_points" SET NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "participants" DROP COLUMN "players"`)
    await queryRunner.query(
      `ALTER TABLE "participants" ADD "players" uuid NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" DROP COLUMN "participant_type"`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ADD "participant_type" character`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" ALTER COLUMN "status" SET DEFAULT false`,
    )
    await queryRunner.query(`ALTER TABLE "tournaments" DROP COLUMN "managerId"`)
    await queryRunner.query(`ALTER TABLE "rounds" DROP COLUMN "tournamentsId"`)
    await queryRunner.query(
      `ALTER TABLE "solicitations" DROP COLUMN "tournamentsId"`,
    )
    await queryRunner.query(
      `ALTER TABLE "participants" DROP COLUMN "tournamentsId"`,
    )
    await queryRunner.query(`ALTER TABLE "tournaments" ADD "manager" uuid`)
  }
}
