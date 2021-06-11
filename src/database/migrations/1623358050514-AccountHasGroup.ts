import {MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class AccountHasGroup1623358050514 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'accountHasGroup',
                columns: [
                    {
                        name: 'group_id',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'account_id',
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
                    }
                ]
            })
        );

        await queryRunner.createForeignKey('accountHasGroup', new TableForeignKey({
            name: 'accountHasGroupAccount',
            columnNames: ['account_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'accounts',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));

        await queryRunner.createForeignKey('accountHasGroup', new TableForeignKey({
            name: 'accountHasGroupGroup',
            columnNames: ['group_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'groups',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('accountHasGroup', 'accountHasGroupAccount');
        await queryRunner.dropForeignKey('accountHasGroup', 'accountHasGroupGroup');
        await queryRunner.dropTable('accountHasGroup');
    }
}
