import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IArticleService } from '../interfaces/article-service.interface';
import { IArticle, IUpdateArticleDto } from '../../domain/models/interfaces';
import { IArticleRespuesta } from '../interfaces/respuesta/article-respuesta.interface';
import {
  ARTICLE_REPOSITORY,
  IArticleRepository,
} from '../../domain/services/interfaces';
import { RespuestaServicio } from '@aduana/sen-onion-core';

/**
 * La clase ArticleService es una implementación de la interfaz IArticleService que proporciona métodos
 * para crear, recuperar, actualizar y eliminar artículos.
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
@Injectable()
export class Article2Service implements IArticleService {
  constructor(
    @Inject(ARTICLE_REPOSITORY)
    private articleRepository: IArticleRepository,
  ) {}

  /**
   * La función crea un nuevo artículo y devuelve una respuesta con el artículo creado y un mensaje de
   * éxito, o un mensaje de error si ocurre un error.
   *
   * @param {IArticle} pArticle - El parámetro `pArtículo` es del tipo `IArtículo`, que es una interfaz
   * que representa la estructura de un artículo. Contiene propiedades como título, contenido, autor y
   * fecha.
   * @returns una Promesa que se resuelve en un objeto de tipo `RespuestaServicio<IArtículoRespuesta>`.
   */
  async createArticle(
    pArticle: IArticle,
  ): Promise<RespuestaServicio<IArticleRespuesta>> {
    return null;
  }

  /**
   * La función `getArticles` recupera artículos del repositorio de artículos y devuelve un objeto de
   * respuesta con los artículos y cualquier mensaje de error.
   *
   * @returns La función `getArtículos` devuelve una Promesa que se resuelve en un objeto de tipo
   * `RespuestaServicio<IArtículoRespuesta>`.
   */
  async getArticles(): Promise<RespuestaServicio<IArticleRespuesta>> {
    const vRespuesta = new RespuestaServicio<IArticleRespuesta>();
    const vResultado: IArticleRespuesta = {};
    try {
      vResultado.articles = await this.articleRepository.find();
      vRespuesta.setRespuesta(vResultado);
      vRespuesta.setTransaccion(true);
      vRespuesta.addMensaje({ codigo: HttpStatus.OK, mensaje: 'success' });
    } catch (error) {
      vRespuesta.addMensaje({
        codigo: HttpStatus.INTERNAL_SERVER_ERROR,
        mensaje: error.message,
      });
    }
    return vRespuesta;
  }

  /**
   * La función `getArticle` recupera un artículo del repositorio de artículos en función del ID
   * proporcionado y devuelve un objeto de respuesta con los datos del artículo.
   *
   * @param {number} pId - El parámetro 'pId' es de tipo 'número' y representa el ID del artículo que
   * debe recuperarse.
   * @returns La función `getArticle` devuelve una Promesa que se resuelve en un objeto de tipo
   * `RespuestaServicio<IArticleRespuesta>`.
   */
  async getArticle(pId: number): Promise<RespuestaServicio<IArticleRespuesta>> {
    const vRespuesta = new RespuestaServicio<IArticleRespuesta>();
    const vResultado: IArticleRespuesta = {};
    try {
      vResultado.article = await this.articleRepository.findById(pId);
      vRespuesta.setRespuesta(vResultado);
      vRespuesta.setTransaccion(true);
      vRespuesta.addMensaje({ codigo: HttpStatus.OK, mensaje: 'success' });
    } catch (error) {
      vRespuesta.addMensaje({
        codigo: HttpStatus.INTERNAL_SERVER_ERROR,
        mensaje: error.message,
      });
    }
    return vRespuesta;
  }

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
  async updateArticle(
    pId: number,
    pArticle: IUpdateArticleDto,
  ): Promise<RespuestaServicio<IArticleRespuesta>> {
    // const vRespuesta = new RespuestaServicio<IArticleRespuesta>();
    // const vResultado: IArticleRespuesta = {};
    // try {
    //   await this.articleRepository.update(pId, pArticle);
    //   vResultado.article = await this.articleRepository.findOneBy({ id: pId });
    //   vRespuesta.setRespuesta(vResultado);
    //   vRespuesta.setTransaccion(true);
    //   vRespuesta.addMensaje({ codigo: HttpStatus.OK, mensaje: 'success' });
    // } catch (error) {
    //   vRespuesta.addMensaje({
    //     codigo: HttpStatus.INTERNAL_SERVER_ERROR,
    //     mensaje: error.message,
    //   });
    // }
    // return vRespuesta;
    return null;
  }

  /**
   * Esta función elimina un artículo por su ID y devuelve un objeto de respuesta que indica el éxito o
   * fracaso de la operación.
   * @param {any} id - El parámetro `id` es el identificador del artículo que debe eliminarse.
   * @returns una Promesa que se resuelve en un objeto de tipo `RespuestaServicio<IArtículoRespuesta>`.
   */
  async deleteArticle(id: any): Promise<RespuestaServicio<IArticleRespuesta>> {
    // const vRespuesta = new RespuestaServicio<IArticleRespuesta>();
    // const vResultado: IArticleRespuesta = {};
    // try {
    //   vResultado.eliminar = await this.articleRepository.delete(id);
    //   vRespuesta.setRespuesta(vResultado);
    //   vRespuesta.setTransaccion(true);
    //   vRespuesta.addMensaje({ codigo: HttpStatus.OK, mensaje: 'success' });
    // } catch (error) {
    //   vRespuesta.addMensaje({
    //     codigo: HttpStatus.INTERNAL_SERVER_ERROR,
    //     mensaje: error.message,
    //   });
    // }
    // return vRespuesta;
    return null;
  }
}
