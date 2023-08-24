import { Module } from '@nestjs/common';
import { ArticleClient } from './rest/article.client';

@Module({
  imports: [],
  providers: [ArticleClient],
  exports: [ArticleClient],
})
export class ClientModule {}
