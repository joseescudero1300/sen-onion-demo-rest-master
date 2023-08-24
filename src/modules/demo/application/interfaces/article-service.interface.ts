import { RespuestaServicio } from '@aduana/sen-onion-core';
import {
  ICreateArticleDto,
  IUpdateArticleDto,
} from '../../domain/models/interfaces';
import { IArticleRespuesta } from './respuesta/article-respuesta.interface';

export const ARTICLE_SERVICE = 'ARTICLE_SERVICE';

/**
 * La interfaz "IArticleService" define los métodos
 * para crear, recuperar, actualizar y eliminar artículos..
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
export interface IArticleService {
  /**
   * La función crea un nuevo artículo y devuelve una respuesta con el artículo creado y un mensaje de
   * éxito, o un mensaje de error si ocurre un error.
   *
   * @param {IArticle} pArticle - El parámetro `pArtículo` es del tipo `IArtículo`, que es una interfaz
   * que representa la estructura de un artículo. Contiene propiedades como título, contenido, autor y
   * fecha.
   * @returns una Promesa que se resuelve en un objeto de tipo `RespuestaServicio<IArtículoRespuesta>`.
   */
  createArticle(
    pArticle: ICreateArticleDto,
  ): Promise<RespuestaServicio<IArticleRespuesta>>;

  /**
   * La función `getArticles` recupera artículos del repositorio de artículos y devuelve un objeto de
   * respuesta con los artículos y cualquier mensaje de error.
   *
   * @returns La función `getArtículos` devuelve una Promesa que se resuelve en un objeto de tipo
   * `RespuestaServicio<IArtículoRespuesta>`.
   */
  getArticles(): Promise<RespuestaServicio<IArticleRespuesta>>;

  /**
   * La función `getArticle` recupera un artículo del repositorio de artículos en función del ID
   * proporcionado y devuelve un objeto de respuesta con los datos del artículo.
   *
   * @param {number} pId - El parámetro 'pId' es de tipo 'número' y representa el ID del artículo que
   * debe recuperarse.
   * @returns La función `getArticle` devuelve una Promesa que se resuelve en un objeto de tipo
   * `RespuestaServicio<IArticleRespuesta>`.
   */
  getArticle(id: number): Promise<RespuestaServicio<IArticleRespuesta>>;

  /**
   * La función `updateArticle` actualiza un artículo en una base de datos y devuelve una respuesta con
   * el artículo actualizado.
   *
   * @param {number} pId - El parámetro `pId` es de tipo `número` y representa el ID del artículo que
   * necesita ser actualizado.
   * @param {IUpdateArticleDto} pArticle - El parámetro `pArticle` es del tipo `IUpdateArticleDto`, que
   * es una interfaz que representa los datos necesarios para actualizar un artículo. Contiene
   * propiedades como el título, el contenido y el autor del artículo.
   * @returns una Promesa que se resuelve en un objeto de tipo `RespuestaServicio<IArtículoRespuesta>`.
   */
  updateArticle(
    id: number,
    pArticle: IUpdateArticleDto,
  ): Promise<RespuestaServicio<IArticleRespuesta>>;

  /**
   * Esta función elimina un artículo por su ID y devuelve un objeto de respuesta que indica el éxito o
   * fracaso de la operación.
   * @param {any} id - El parámetro `id` es el identificador del artículo que debe eliminarse.
   * @returns una Promesa que se resuelve en un objeto de tipo `RespuestaServicio<IArtículoRespuesta>`.
   */
  deleteArticle(id): Promise<RespuestaServicio<IArticleRespuesta>>;
}
