import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTournament1602956529679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
            new Table({
                name: "tournaments",
                columns:[{
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default:'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'type',
                    type: 'char',
                },
                {
                    name: 'rules',
                    type: 'varchar',
                },
                {
                    name: 'players_quantity',
                    type: 'integer'
                },
                {
                    name: 'manager_id',
                    type: 'varchar[]'
                },
                {
                    name: 'location',
                    type: 'varchar'
                }
            ]
            })

        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tournaments')
    }

}
