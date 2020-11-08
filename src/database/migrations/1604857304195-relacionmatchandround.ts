import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm'

export class relacionmatchandround1604857304195 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'matchs',
      new TableForeignKey({
        name: 'round_id',
        referencedColumnNames: ['id'],
        columnNames: ['round_id'],
        referencedTableName: 'rounds',
        onDelete: 'SET NULL',
      }),
    )

    await queryRunner.createForeignKey(
      'rounds',
      new TableForeignKey({
        name: 'matchs_ids',
        referencedColumnNames: ['id'],
        columnNames: ['matchs_ids'],
        referencedTableName: 'matchs',
        onDelete: 'SET NULL',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('matchs', 'round_id')
    await queryRunner.dropForeignKey('rounds', 'mathcs_ids')
  }
}
