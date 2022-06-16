import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1655338790746 implements MigrationInterface {
    name = 'initialMigration1655338790746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
    }

}
