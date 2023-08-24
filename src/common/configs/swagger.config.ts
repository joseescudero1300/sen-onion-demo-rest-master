import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { DESCRIPTION, TITLE, VERSION } from '../constants/swagger';

/**
 * La función inicializa la documentación de Swagger para una aplicación Nest.js con autenticación JWT.
 *
 * @param {INestApplication} app - El parámetro `app` es una instancia de la interfaz
 * `INestApplication`. Representa la aplicación Nest para la que desea inicializar Swagger.
 * @param {string} prefix - El parámetro `prefix` es una cadena que representa el prefijo que se
 * agregará al extremo de la documentación de Swagger. Se utiliza para definir la ruta URL donde se
 * podrá acceder a la documentación de Swagger.
 */
export const initSwagger = (app: INestApplication, prefix: string) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle(TITLE)
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT',
    )
    .setDescription(DESCRIPTION)
    .setVersion(VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`/${prefix}/docs`, app, document);
};
