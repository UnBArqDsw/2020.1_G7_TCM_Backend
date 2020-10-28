import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CreateMatch1603814491469 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'matchs',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'status',
            type: 'char',
          },
          {
            name: 'player1',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'player2',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'score',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
    await queryRunner.createForeignKey(
      'matchs',
      new TableForeignKey({
        name: 'player1_id',
        referencedColumnNames: ['id'],
        columnNames: ['player1'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
      }),
    )
    await queryRunner.createForeignKey(
      'matchs',
      new TableForeignKey({
        name: 'player2_id',
        referencedColumnNames: ['id'],
        columnNames: ['player2'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
      }),
    )
    await queryRunner.createForeignKey(
      'matchs',
      new TableForeignKey({
        name: 'participant1_id',
        referencedColumnNames: ['id'],
        columnNames: ['player1'],
        referencedTableName: 'participants',
        onDelete: 'SET NULL',
      }),
    )
    await queryRunner.createForeignKey(
      'matchs',
      new TableForeignKey({
        name: 'participant2_id',
        referencedColumnNames: ['id'],
        columnNames: ['player2'],
        referencedTableName: 'participants',
        onDelete: 'SET NULL',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('matchs', 'participant2_id')
    await queryRunner.dropForeignKey('matchs', 'participant1_id')
    await queryRunner.dropForeignKey('matchs', 'player2_id')
    await queryRunner.dropForeignKey('matchs', 'player1_id')
    await queryRunner.dropTable('matchs')
  }
}
