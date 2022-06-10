import { MigrationInterface, QueryRunner } from "typeorm";

export class uniquenamedvds1654827916381 implements MigrationInterface {
    name = 'uniquenamedvds1654827916381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dvds" ADD CONSTRAINT "UQ_e18959d769fc5165f0824b597f3" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dvds" DROP CONSTRAINT "UQ_e18959d769fc5165f0824b597f3"`);
    }

}
