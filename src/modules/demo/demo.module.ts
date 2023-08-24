import { Module } from '@nestjs/common';
import { ArticleRepository } from './domain/services/repositories/article.repository';
import { ARTICLE_SERVICE } from './application/interfaces/article-service.interface';
import { ArticleService } from './application/services/article.service';
import { ARTICLE_REPOSITORY } from './domain/services/interfaces';
import { ArticleController } from './infrastructure/rest/controllers/article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './domain/models/entities';
import { Article2Service } from './application/services/article2.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [
    {
      provide: ARTICLE_SERVICE,
      useClass: ArticleService,
    },
    {
      provide: ARTICLE_REPOSITORY,
      useClass: ArticleRepository,
    },
  ],
})
export class DemoModule {}
