import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import {
  ICreateArticleDto,
  IUpdateArticleDto,
} from '../../domain/models/interfaces';

/**
 * La clase CreateArticleDto representa el objeto de transferencia de
 * datos para crear un artículo, con propiedades para el título y el cuerpo del artículo.
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
export class CreateArticleDto implements ICreateArticleDto {
  @ApiProperty()
  @IsNotEmpty({
    context: {
      codigo: 4000,
      mensaje: 'no debe estar vacío',
    },
  })
  @IsString({
    context: {
      codigo: 4001,
      mensaje: 'debe ser una cadena',
    },
  })
  readonly title: string;

  @ApiProperty()
  @IsNotEmpty({
    context: {
      codigo: 4000,
      mensaje: 'no debe estar vacío',
    },
  })
  @IsString({
    context: {
      codigo: 4001,
      mensaje: 'debe ser una cadena',
    },
  })
  readonly body: string;
}

/**
 * La clase UpdateArticleDto amplía la clase CreateArticleDto e implementa
 * la interfaz IUpdateArticleDto representa el objeto de transferencia de
 * datos para actualizar un artículo.
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
export class UpdateArticleDto
  extends PartialType(CreateArticleDto)
  implements IUpdateArticleDto {}
