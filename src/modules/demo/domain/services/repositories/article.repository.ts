import { Injectable } from '@nestjs/common';
import { IArticleRepository } from '../interfaces';
import {
  IArticle,
  ICreateArticleDto,
  IFindArticleDto,
  IUpdateArticleDto,
} from '../../models/interfaces';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

/**
 * La clase ArticleRepository es una implementación de la interfaz IArticleRepository que interactúa
 * con una fuente de datos para realizar operaciones CRUD en artículos.
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
@Injectable()
export class ArticleRepository implements IArticleRepository {
  constructor(@InjectDataSource() private dataSource: DataSource) {}
  /**
   * La función "guardar" es un método de TypeScript que arroja un error indicando que no está
   * implementado.
   *
   * @param {ICreateArticleDto} pInput - El parámetro `pInput` es de tipo `IArticle`.
   */
  save(pInput: ICreateArticleDto): Promise<IFindArticleDto> {
    throw new Error('Method not implemented.');
  }

  /**
   * La función `find` recupera todos los artículos de una fuente de datos y los devuelve como una
   * matriz de objetos `IArticle`.
   *
   * @returns La función find() devuelve una Promesa que se resuelve en una matriz de objetos IArticle.
   */
  async find(): Promise<IFindArticleDto[]> {
    try {
      const query = `SELECT * FROM articles`;
      const result = await this.dataSource.query(query);
      return result;
    } catch (error) {
      throw new Error('Error en el servidor.');
    }
  }

  /**
   * La función findById toma un parámetro numérico pId y devuelve una Promesa que se resuelve en un
   * objeto IArticle, que representa un artículo con la identificación especificada.
   *
   * @param {number} pId - El parámetro 'pId' es del tipo 'número' y representa el ID del artículo que
   * debe obtenerse de la base de datos.
   * @returns una Promesa que se resuelve en un objeto de tipo IArtículo.
   */
  async findById(pId: number): Promise<IFindArticleDto> {
    try {
      const query = `SELECT *
      FROM articles
      WHERE id = ${pId}`;
      const result = await this.dataSource.query(query);
      return result[0];
    } catch (error) {
      throw new Error('Error en el servidor.');
    }
  }

  /**
   * La función "actualizar" es un método de TypeScript que toma una entrada de tipo "IArticle" y
   * devuelve una Promesa de tipo "IArticle", pero actualmente arroja un error que indica que no está
   * implementada.
   *
   * @param {IArticle} pInput - El parámetro pInput es de tipo IArtículo, que representa un objeto de
   * artículo.
   */
  update(pInput: IUpdateArticleDto): Promise<IFindArticleDto> {
    throw new Error('Method not implemented.');
  }

  /**
   * La función de eliminación arroja un error que indica que no está implementada.
   * @param {number} pId - El parámetro `pId` es del tipo `número` y representa el ID del elemento que
   * debe eliminarse.
   */
  delete(pId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
