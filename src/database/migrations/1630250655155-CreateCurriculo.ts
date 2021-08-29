import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCurriculo1630250655155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'curriculoBD',
            columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'role',
                        type: 'varchar'
                    },
                    {
                        name: 'birth',
                        type: 'varchar'
                    },
                    {
                        name: 'maritalstatus',
                        type: 'varchar'
                    },
                    {
                        name: 'gender',
                        type: 'varchar'
                    },
                    {
                        name: 'adress',
                        type: 'varchar'
                    },
                    {
                        name: 'neighborhood',
                        type: 'varchar'
                    },
                    {
                        name: 'city',
                        type: 'varchar'
                    },
                    {
                        name: 'zipcode',
                        type: 'varchar'
                    },
                    {
                        name: 'phone',
                        type: 'varchar'
                    },
                    {
                        name: 'cellphone',
                        type: 'varchar'
                    },
                    {
                        name: 'linkedin',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'RG',
                        type: 'varchar'
                    },
                    {
                        name: 'CPF',
                        type: 'varchar'
                    },
                    {
                        name: 'vehicle',
                        type: 'varchar'
                    },
                    {
                        name: 'CNH',
                        type: 'varchar'
                    }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('curriculoBD')
    }

}
