import { MigrationInterface, QueryRunner } from "typeorm";
import { hashSync } from "bcrypt";
import * as dotevn from "dotenv";

dotevn.config();

export class adminUser1656299412215 implements MigrationInterface {
  name = "adminUser1656299412215";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "carts" ALTER COLUMN "paid" SET DEFAULT false`
    );
    await queryRunner.query(
      `
                    INSERT INTO "user" ("name", "email", "password", "isAdm")
                    VALUES ('kenzinho', '${
                      process.env.ADMIN_EMAIL
                    }', '${hashSync(process.env.ADMIN_PASSWORD, 10)}', true)
                  `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "carts" ALTER COLUMN "paid" DROP DEFAULT`
    );
  }
}
