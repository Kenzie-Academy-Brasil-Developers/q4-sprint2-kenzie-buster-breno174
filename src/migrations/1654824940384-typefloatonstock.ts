import { MigrationInterface, QueryRunner } from "typeorm";

export class typefloatonstock1654824940384 implements MigrationInterface {
    name = 'typefloatonstock1654824940384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "stock" ADD "price" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "stock" ADD "price" integer NOT NULL`);
    }

}
