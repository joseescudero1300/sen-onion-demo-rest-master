/**
 * Esta interfaz especifica la estructura de un objeto de artículo, que incluye tres propiedades: 'id' de
 * tipo número, 'cuerpo' de tipo cadena y 'título' de tipo cadena. La palabra clave `exportar`.
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
export interface IArticle {
  articleId: number;
  title: string;
  body: string;
}

/**
 * interfaz `ICreateArticleDto` que amplía la interfaz `IArticle` como objeto de transferencia de creación.
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
export interface ICreateArticleDto extends Omit<IArticle, 'articleId'> {}

/**
 * interfaz `IUpdateArtículoDto` que extiende el tipo de utilidad `Parcial` aplicado a la interfaz
 * `ICreateArtículoDto` como objeto de transferencia de actualización.
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
export interface IUpdateArticleDto extends Partial<ICreateArticleDto> {}

/**
 * interfaz llamada `IFindArticleDto` que extiende el tipo de utilidad `Readonly` aplicado al tipo
 * de utilidad `Parcial` aplicado a la interfaz `IArticle`. como objeto de transferencia de Obtención
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
export interface IFindArticleDto extends Readonly<Partial<IArticle>> {}
