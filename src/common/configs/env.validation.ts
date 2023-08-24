import { plainToClass } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator';

/**
 * La clase "EnvironmentVariables" se utiliza para definir y validar una variables de entorno
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
class EnvironmentVariables {
  @IsNotEmpty()
  @IsNumber()
  PORT: number;

  @IsNotEmpty()
  @IsString()
  DB_TYPE: string;

  @IsNotEmpty()
  @IsString()
  DB_HOST: string;

  @IsNotEmpty()
  @IsNumber()
  DB_PORT: number;

  @IsNotEmpty()
  @IsString()
  DB_USERNAME: string;

  @IsNotEmpty()
  @IsString()
  DB_PASSWORD: string;

  @IsNotEmpty()
  @IsString()
  DB_DATABASE: string;

  @IsNotEmpty()
  @IsString()
  DB_URL: string;

  @IsNotEmpty()
  @IsString()
  JWT_PUBLIC_KEY: string;

  @IsNotEmpty()
  @IsString()
  NAME_PROJECT: string;
}

export const validated = (config: Record<string, unknown>) => {
  // `plainToClass` para convertir objeto simple en Clase
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  // El método `validateSync` valida la clase y devuelve errores
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
};
