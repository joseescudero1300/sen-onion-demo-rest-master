import { IFindArticleDto } from 'src/modules/demo/domain/models/interfaces';
import { DeleteResult } from 'typeorm';

/**
 * Esta interfaz IArticleRespuesta define la respuesta con tres propiedades opcionales:
 * `article`, `articles` y `eliminar`.
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
export interface IArticleRespuesta {
  article?: IFindArticleDto;
  articles?: IFindArticleDto[];
  eliminar?: DeleteResult;
}
