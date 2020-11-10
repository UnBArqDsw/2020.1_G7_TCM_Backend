import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm'

export class AddSolicitation1604962398454 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'tournaments',
      new TableForeignKey({
        name: 'solicitation_id',
        referencedColumnNames: ['id'],
        columnNames: ['solicitation'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tournaments', 'solicitation_id')
  }
}
