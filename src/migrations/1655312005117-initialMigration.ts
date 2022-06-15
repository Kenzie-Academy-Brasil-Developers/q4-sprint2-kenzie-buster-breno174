import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1655312005117 implements MigrationInterface {
    name = 'initialMigration1655312005117'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dvds" DROP CONSTRAINT "FK_51eec1a08a636b8f8740878808b"`);
        await queryRunner.query(`ALTER TABLE "dvds" ALTER COLUMN "stockStockId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dvds" ADD CONSTRAINT "FK_51eec1a08a636b8f8740878808b" FOREIGN KEY ("stockStockId") REFERENCES "stock"("stockId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dvds" DROP CONSTRAINT "FK_51eec1a08a636b8f8740878808b"`);
        await queryRunner.query(`ALTER TABLE "dvds" ALTER COLUMN "stockStockId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dvds" ADD CONSTRAINT "FK_51eec1a08a636b8f8740878808b" FOREIGN KEY ("stockStockId") REFERENCES "stock"("stockId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
