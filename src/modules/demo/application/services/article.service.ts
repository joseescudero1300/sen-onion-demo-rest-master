import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { IArticleService } from '../interfaces/article-service.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from '../../domain/models/entities';
import { IArticle, IUpdateArticleDto } from '../../domain/models/interfaces';
import { IArticleRespuesta } from '../interfaces';
import { RespuestaServicio, ServiceImpl } from '@aduana/sen-onion-core';

/**
 * La clase ArticleService es una implementación de la interfaz IArticleService que proporciona métodos
 * para crear, recuperar, actualizar y eliminar artículos.
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
@Injectable()
export class ArticleService extends ServiceImpl implements IArticleService {
  readonly logger = new Logger(ArticleService.name);
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<IArticle>,
  ) {
    super(ArticleService.name);
  }

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
    this.logger.verbose('Create Article');
    const vRespuesta = new RespuestaServicio<IArticleRespuesta>();
    const vResultado: IArticleRespuesta = {};
    try {
      const vNewArticle = this.articleRepository.create(pArticle);
      vResultado.article = await this.articleRepository.save(vNewArticle);
      vRespuesta.setRespuesta(vResultado);
      vRespuesta.setTransaccion(true);
      vRespuesta.addMensaje({ codigo: 2001, mensaje: 'Creado correctamente' });
    } catch (error) {
      this.logger.error(error);
      vRespuesta.addMensaje({
        codigo: HttpStatus.INTERNAL_SERVER_ERROR,
        mensaje: error.message,
      });
    }
    return vRespuesta;
  }

  /**
   * La función `getArticles` recupera artículos del repositorio de artículos y devuelve un objeto de
   * respuesta con los artículos y cualquier mensaje de error.
   *
   * @returns La función `getArtículos` devuelve una Promesa que se resuelve en un objeto de tipo
   * `RespuestaServicio<IArtículoRespuesta>`.
   */
  async getArticles(): Promise<RespuestaServicio<IArticleRespuesta>> {
    this.logger.verbose('Get Articles');
    const vRespuesta = new RespuestaServicio<IArticleRespuesta>();
    const vResultado: IArticleRespuesta = {};
    try {
      vResultado.articles = await this.articleRepository.find();
      vRespuesta.setRespuesta(vResultado);
      vRespuesta.setTransaccion(true);
      vRespuesta.addMensaje({ codigo: HttpStatus.OK, mensaje: 'success' });
    } catch (error) {
      this.logger.error(error);
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
    this.logger.verbose('Get Article');
    const vRespuesta = new RespuestaServicio<IArticleRespuesta>();
    const vResultado: IArticleRespuesta = {};
    try {
      vResultado.article = await this.articleRepository.findOneBy({
        articleId: pId,
      });
      vRespuesta.setRespuesta(vResultado);
      vRespuesta.setTransaccion(true);
      vRespuesta.addMensaje({ codigo: HttpStatus.OK, mensaje: 'success' });
    } catch (error) {
      this.logger.error(error);
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
    this.logger.verbose('Update Article');
    const vRespuesta = new RespuestaServicio<IArticleRespuesta>();
    const vResultado: IArticleRespuesta = {};
    try {
      await this.articleRepository.update(pId, pArticle);
      vResultado.article = await this.articleRepository.findOneBy({
        articleId: pId,
      });
      vRespuesta.setRespuesta(vResultado);
      vRespuesta.setTransaccion(true);
      vRespuesta.addMensaje({ codigo: HttpStatus.OK, mensaje: 'success' });
    } catch (error) {
      this.logger.error(error);
      vRespuesta.addMensaje({
        codigo: HttpStatus.INTERNAL_SERVER_ERROR,
        mensaje: error.message,
      });
    }
    return vRespuesta;
  }

  /**
   * Esta función elimina un artículo por su ID y devuelve un objeto de respuesta que indica el éxito o
   * fracaso de la operación.
   * @param {any} id - El parámetro `id` es el identificador del artículo que debe eliminarse.
   * @returns una Promesa que se resuelve en un objeto de tipo `RespuestaServicio<IArtículoRespuesta>`.
   */
  async deleteArticle(id: any): Promise<RespuestaServicio<IArticleRespuesta>> {
    this.logger.verbose('Delete Articles');
    const vRespuesta = new RespuestaServicio<IArticleRespuesta>();
    const vResultado: IArticleRespuesta = {};
    try {
      vResultado.eliminar = await this.articleRepository.delete(id);
      vRespuesta.setRespuesta(vResultado);
      vRespuesta.setTransaccion(true);
      vRespuesta.addMensaje({ codigo: HttpStatus.OK, mensaje: 'success' });
    } catch (error) {
      this.logger.error(error);
      vRespuesta.addMensaje({
        codigo: HttpStatus.INTERNAL_SERVER_ERROR,
        mensaje: error.message,
      });
    }
    return vRespuesta;
  }
}
