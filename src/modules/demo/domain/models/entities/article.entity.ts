import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IArticle } from '../interfaces/article.interface';
import { Entidad } from '@aduana/sen-onion-core';

/**
 * La clase Article es una entidad que representa artículos con propiedades como id, cuerpo y título.
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
@Entity('articles')
export class Article extends Entidad implements IArticle {
  @PrimaryGeneratedColumn({ name: 'articulo_id' })
  articleId: number;
  @Column()
  title: string;
  @Column()
  body: string;
}
