import {
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
  TableColumn,
} from 'typeorm'

export class addmanagerandsolicitation1603057372196
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('tournaments', 'manager')
    await queryRunner.addColumn(
      'tournaments',
      new TableColumn({
        name: 'manager',
        type: 'uuid',
        isNullable: true,
      }),
    )
    await queryRunner.createForeignKey(
      'tournaments',
      new TableForeignKey({
        name: 'manager_id',
        referencedColumnNames: ['id'],
        columnNames: ['manager'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tournaments', 'manager_id')
  }
}
