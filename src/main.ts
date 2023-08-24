import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { initSwagger } from './common/configs';
import { CoreLogger, HttpExceptionFilter } from '@aduana/sen-onion-core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const result = [];
        errors.map((error) => {
          if (error.contexts) {
            Object.values(error.contexts).map((value) => {
              result.push({
                codigo: value.codigo,
                mensaje: ` ${error.property} ${value.mensaje}`,
              });
            });
          }
          // if (error.contexts) {
          //   Object.values(error.contexts).map((value) => {
          //     result.push(value);
          //   });
          // }
        });
        return new BadRequestException(result);
      },
    }),
  );
  app.setGlobalPrefix(AppModule.PATH);
  initSwagger(app, AppModule.PATH);
  app.useLogger(app.get(CoreLogger));
  await app.listen(AppModule.PORT);
}
bootstrap();
