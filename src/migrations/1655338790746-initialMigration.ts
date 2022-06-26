import { MigrationInterface, QueryRunner } from "typeorm";
import { hashSync } from "bcrypt";
import * as dotevn from "dotenv";

dotevn.config();

export class initialMigration1655338790746 implements MigrationInterface {
  name = "initialMigration1655338790746";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "name" character varying NOT NULL`
    );
    await queryRunner.query(
      `
              INSERT INTO "user" ("name", "email", "password", "isAdm")
              VALUES ('kenzinho', '${process.env.ADMIN_EMAIL}', '${hashSync(
        process.env.ADMIN_PASSWORD,
        10
      )}', true)
            `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
  }
}
