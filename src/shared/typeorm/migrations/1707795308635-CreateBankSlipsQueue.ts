import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBankSlipsQueue1707795308635 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bankSlipsQueue',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'governmentId',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'debtAmount',
            type: 'decimal',
            scale: 2,
          },
          {
            name: 'debtDueDate',
            type: 'timestamp',
          },
          {
            name: 'debtID',
            type: 'varchar',
          },
          { name: 'isProcessed', type: 'boolean', default: false },
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
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bankSlipsQueue');
  }
}
