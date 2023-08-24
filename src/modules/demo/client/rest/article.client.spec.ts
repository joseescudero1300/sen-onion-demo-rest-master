import { Test, TestingModule } from '@nestjs/testing';
import { ArticleClient } from './article.client';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { CoreModule } from '@aduana/sen-onion-core';

describe('ArticleClient', () => {
  let provider: ArticleClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        CoreModule,
        HttpModule,
        ConfigModule.forRoot({ isGlobal: true }),
      ],
      providers: [ArticleClient],
    }).compile();

    provider = module.get<ArticleClient>(ArticleClient);
  });

  it('should be defined', async () => {
    console.log(await provider.getArticles());
    expect(provider).toBeDefined();
  });
});
