import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class addcolumnroundandparticipants1605048139775
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'tournaments',
      new TableColumn({
        name: 'participants',
        type: 'varchar',
      }),
    )
    await queryRunner.addColumn(
      'tournaments',
      new TableColumn({
        name: 'rounds_ids',
        type: 'varchar',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tournaments')
    await queryRunner.dropTable('rounds_ids')
  }
}
