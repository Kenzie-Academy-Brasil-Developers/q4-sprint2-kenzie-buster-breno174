import { MigrationInterface, QueryRunner } from "typeorm";

export class addStockTables1654622671006 implements MigrationInterface {
  name = "addStockTables1654622671006";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "dvds" RENAME COLUMN "DvdId" TO "dvdId"`
    );
    await queryRunner.query(
      `ALTER TABLE "dvds" RENAME CONSTRAINT "PK_2dc5ec175d2713e82c12523d64f" TO "PK_d4d2964c23a026de3c9aba18ab5"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "dvds" RENAME CONSTRAINT "PK_d4d2964c23a026de3c9aba18ab5" TO "PK_2dc5ec175d2713e82c12523d64f"`
    );
    await queryRunner.query(
      `ALTER TABLE "dvds" RENAME COLUMN "dvdId" TO "DvdId"`
    );
  }
}
