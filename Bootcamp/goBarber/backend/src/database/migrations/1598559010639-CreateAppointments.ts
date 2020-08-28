import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1598559010639
    implements MigrationInterface {
    // O que queremos que seja feito no banco de dados, quando a migration for executada
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns: [
                    {
                        // Nome da coluna
                        name: 'id',
                        // Tipo da coluna
                        type: 'varchar',
                        // Chave primária
                        isPrimary: true,
                        /* Estratégia de geração, para gerar o campo
                            automáticamente com o objetivo de ser um
                            uuid
                        */
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'provider',
                        type: 'varchar',
                        // Não é possível ter valores nulos
                        isNullable: false,
                    },
                    {
                        name: 'date',
                        /*
                            Se não estiver utilizando postgres
                            podemos utilizar somente timestamp,
                            porém no timestamp with time zone,
                            ele salva a data com o fuzo horário
                            junto.
                        */
                        type: 'timestamp with time zone',
                        isNullable: false,
                    },
                ],
            }),
        );
    }

    // Utilizada como um fallback (desfazer o que fiz no método up)
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments');
    }
}
