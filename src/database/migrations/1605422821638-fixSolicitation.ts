import {MigrationInterface, QueryRunner} from "typeorm";

export class fixSolicitation1605422821638 implements MigrationInterface {
    name = 'fixSolicitation1605422821638'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "solicitations" DROP CONSTRAINT "FK_fd585d8adbbb553d3644cdda687"`);
        await queryRunner.query(`ALTER TABLE "solicitations" ADD "requesterId" uuid`);
        await queryRunner.query(`ALTER TABLE "solicitations" DROP CONSTRAINT "UQ_fd585d8adbbb553d3644cdda687"`);
        await queryRunner.query(`ALTER TABLE "solicitations" DROP COLUMN "user"`);
        await queryRunner.query(`ALTER TABLE "solicitations" ADD "user" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "solicitations" ADD CONSTRAINT "FK_c8140da1287e028b92736f40d5e" FOREIGN KEY ("requesterId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "solicitations" DROP CONSTRAINT "FK_c8140da1287e028b92736f40d5e"`);
        await queryRunner.query(`ALTER TABLE "solicitations" DROP COLUMN "user"`);
        await queryRunner.query(`ALTER TABLE "solicitations" ADD "user" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "solicitations" ADD CONSTRAINT "UQ_fd585d8adbbb553d3644cdda687" UNIQUE ("user")`);
        await queryRunner.query(`ALTER TABLE "solicitations" DROP COLUMN "requesterId"`);
        await queryRunner.query(`ALTER TABLE "solicitations" ADD CONSTRAINT "FK_fd585d8adbbb553d3644cdda687" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
