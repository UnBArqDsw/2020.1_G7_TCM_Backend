import {MigrationInterface, QueryRunner} from "typeorm";

export class fixSolicitation1605423127308 implements MigrationInterface {
    name = 'fixSolicitation1605423127308'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "solicitations" DROP COLUMN "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "solicitations" ADD "user" character varying NOT NULL`);
    }

}
