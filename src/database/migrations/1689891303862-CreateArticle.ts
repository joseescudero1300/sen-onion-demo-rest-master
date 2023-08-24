import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateArticle1689891303862 implements MigrationInterface {
    name = 'CreateArticle1689891303862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "articles" ("usuario_registro" character varying NOT NULL, "usuario_ultima_modificacion" character varying NOT NULL, "fecha_registro" TIMESTAMP NOT NULL DEFAULT now(), "fecha_ultima_modificacion" TIMESTAMP NOT NULL DEFAULT now(), "estado" character varying NOT NULL DEFAULT 'AC', "articulo_id" SERIAL NOT NULL, "title" character varying NOT NULL, "body" character varying NOT NULL, CONSTRAINT "PK_9ee4386a1b444f63ed8579ba51a" PRIMARY KEY ("articulo_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "articles"`);
    }

}
