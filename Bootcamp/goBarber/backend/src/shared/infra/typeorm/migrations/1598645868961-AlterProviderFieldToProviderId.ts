import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterProviderFieldToProviderId1598645868961
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('appointments', 'provider');
        await queryRunner.addColumn(
            'appointments',
            new TableColumn({
                name: 'provider_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            // nome da tabela atual
            'appointments',
            // Tabela de chaves estrangeiras
            new TableForeignKey({
                name: 'AppointmentProvider',
                // Coluna na tabela atual
                columnNames: ['provider_id'],
                /*
                 Qual o nome da coluna da outra tabela que
                 irá relacionar com a tabela atual
                */
                referencedColumnNames: ['id'],
                // Tabela que será referenciada com esse campo
                referencedTableName: 'users',
                /*
                    O que irá acontecer com os agendamentos
                    caso o usuário seja deletado

                    - RESTRICTED/RESTRICT => Não deixa o usuário ser deletado.
                    - SET NULL => Setar a coluna na tabela atual (no caso o provider_id) como nulo.
                    - CASCADE => Ao deletar o usuário deleta todos os agendamentos que o usuário está relacionado.
                */
                onDelete: 'SET NULL',
                // Caso o id for alterado o que deve acontecer? Nesse caso sempre CASCADE
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('appointments', 'AppointmentProvider');
        await queryRunner.dropColumn('appointments', 'provider_id');
        await queryRunner.addColumn(
            'appointments',
            new TableColumn({
                name: 'provider',
                type: 'varchar',
            }),
        );
    }
}
