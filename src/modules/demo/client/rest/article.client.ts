import { HttpClient, RespuestaServicio } from '@aduana/sen-onion-core';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ICreateArticleDto,
  IUpdateArticleDto,
} from '../../domain/models/interfaces';
import {
  IArticleRespuesta,
  IArticleService,
} from '../../application/interfaces';

/**
 * La clase ArticleClient es una implementación de la interfaz IArticleService que proporciona métodos
 * para crear, recuperar, actualizar y eliminar artículos mediante solicitudes HTTP.
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
@Injectable()
export class ArticleClient implements IArticleService {
  apiUrl: string;
  config = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `bearer ${encodeToken}`,
    },
  };
  constructor(private readonly httpService: HttpClient, config: ConfigService) {
    this.apiUrl = config.get<string>('NAME_PROJECT') + 'article/';
  }

  /**
   * La función crea un artículo realizando una solicitud POST a la URL de la API especificada con los
   * datos del artículo proporcionados.
   *
   * @param {ICreateArticleDto} pArticle - El parámetro `pArticle` es del tipo `ICreateArticleDto`, que
   * es una interfaz que representa los datos necesarios para crear un artículo.
   * @returns una Promesa que se resuelve en un objeto de respuesta de tipo
   * `RespuestaServicio<IArticleRespuesta>`.
   */
  async createArticle(
    pArticle: ICreateArticleDto,
  ): Promise<RespuestaServicio<IArticleRespuesta>> {
    return await this.httpService.post(this.apiUrl, pArticle);
  }

  /**
   * La función `getArticles` es una función asíncrona que devuelve una promesa de tipo
   * `RespuestaServicio<IArticleRespuesta>`, y realiza una petición HTTP GET a la `apiUrl`.
   *
   * @returns una Promesa que se resuelve en un objeto de respuesta de tipo
   * RespuestaServicio<IArtículoRespuesta>.
   */
  async getArticles(): Promise<RespuestaServicio<IArticleRespuesta>> {
    return await this.httpService.get(this.apiUrl);
  }

  /**
   * La función `getArticle` es una función asíncrona que recupera un artículo utilizando una solicitud
   * HTTP GET.
   *
   * @param {number} pId - El parámetro `pId` es de tipo `número` y representa el ID del artículo que
   * desea recuperar.
   * @returns una Promesa que se resuelve en un objeto de respuesta de tipo
   * `RespuestaServicio<IArticleRespuesta>`.
   */
  async getArticle(pId: number): Promise<RespuestaServicio<IArticleRespuesta>> {
    return await this.httpService.get(this.apiUrl + pId);
  }

  /**
   * La función `updateArticle` es una función asíncrona que actualiza un artículo realizando una
   * solicitud PUT a un punto final de API especificado con los datos del artículo proporcionados.
   *
   * @param {number} pId - El parámetro pId es un número que representa el ID del artículo que necesita
   * ser actualizado.
   * @param {IUpdateArticleDto} pArticle - El parámetro `pArticle` es del tipo `IUpdateArticleDto`, que
   * es una interfaz que representa los datos necesarios para actualizar un artículo.
   * @returns una Promesa que se resuelve en un objeto de respuesta de tipo
   * `RespuestaServicio<IArticleRespuesta>`.
   */
  async updateArticle(
    pId: number,
    pArticle: IUpdateArticleDto,
  ): Promise<RespuestaServicio<IArticleRespuesta>> {
    return await this.httpService.put(this.apiUrl + pId, pArticle);
  }

  /**
   * La función `deleteArticle` es una función asíncrona que envía una solicitud DELETE al extremo de
   * la API especificado con el ID del artículo proporcionado y devuelve una promesa que se resuelve en
   * un objeto de respuesta.
   *
   * @param {any} pId - El parámetro `pId` es el identificador del artículo que debe eliminarse. Es del
   * tipo `cualquiera`, lo que significa que puede aceptar cualquier tipo de datos.
   * @returns una Promesa que se resuelve en un objeto de respuesta de tipo
   * `RespuestaServicio<IArticleRespuesta>`.
   */
  async deleteArticle(pId: any): Promise<RespuestaServicio<IArticleRespuesta>> {
    return await this.httpService.delete(this.apiUrl + pId);
  }
}
