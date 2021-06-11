import {MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class MessageMigration1623356472085 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'messages',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'text',
                        type: 'varchar',
                    },
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

        await queryRunner.createForeignKey('messages', new TableForeignKey({
            name: 'messageGroup',
            columnNames: ['group_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'groups',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }))

        await queryRunner.createForeignKey('messages', new TableForeignKey({
            name: 'messageAccount',
            columnNames: ['account_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'accounts',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('messages', 'messageGroup')
        await queryRunner.dropForeignKey('messages', 'messageAccount')
        await queryRunner.dropTable('messages');
    }

}
