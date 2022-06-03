import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1654278903095 implements MigrationInterface {
    name = 'initialMigration1654278903095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stock" ("stockId" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_0004798645c233732d6dfae2cb2" PRIMARY KEY ("stockId"))`);
        await queryRunner.query(`CREATE TABLE "dvds" ("DvdId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "duration" character varying NOT NULL, "stockStockId" uuid, CONSTRAINT "PK_2dc5ec175d2713e82c12523d64f" PRIMARY KEY ("DvdId"))`);
        await queryRunner.query(`CREATE TABLE "user" ("userUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_4423c41142d3004ba5c9eb3ee46" PRIMARY KEY ("userUuid"))`);
        await queryRunner.query(`CREATE TABLE "carts" ("cartId" uuid NOT NULL DEFAULT uuid_generate_v4(), "paid" boolean NOT NULL, "total" double precision NOT NULL, "userUserUuid" uuid, "dvdsDvdId" uuid, CONSTRAINT "PK_75eb343efb7459aad5dd7f8045c" PRIMARY KEY ("cartId"))`);
        await queryRunner.query(`ALTER TABLE "dvds" ADD CONSTRAINT "FK_51eec1a08a636b8f8740878808b" FOREIGN KEY ("stockStockId") REFERENCES "stock"("stockId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carts" ADD CONSTRAINT "FK_54043fd9d790d0fe8832ac8a6ac" FOREIGN KEY ("userUserUuid") REFERENCES "user"("userUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carts" ADD CONSTRAINT "FK_f800e69b41365cbcdf99eb5c926" FOREIGN KEY ("dvdsDvdId") REFERENCES "dvds"("DvdId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carts" DROP CONSTRAINT "FK_f800e69b41365cbcdf99eb5c926"`);
        await queryRunner.query(`ALTER TABLE "carts" DROP CONSTRAINT "FK_54043fd9d790d0fe8832ac8a6ac"`);
        await queryRunner.query(`ALTER TABLE "dvds" DROP CONSTRAINT "FK_51eec1a08a636b8f8740878808b"`);
        await queryRunner.query(`DROP TABLE "carts"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "dvds"`);
        await queryRunner.query(`DROP TABLE "stock"`);
    }

}
