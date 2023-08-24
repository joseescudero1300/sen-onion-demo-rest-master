import {
  ICreateArticleDto,
  IFindArticleDto,
  IUpdateArticleDto,
} from '../../models/interfaces';
import { IRepository } from '@aduana/sen-onion-core';

export const ARTICLE_REPOSITORY = 'ARTICLE_REPOSITORY';

/**
 * El interfaz `IArticleRepository` define los métodos
 * para crear, recuperar, actualizar y eliminar artículos.
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
export interface IArticleRepository
  extends IRepository<ICreateArticleDto, IUpdateArticleDto, IFindArticleDto> {}
