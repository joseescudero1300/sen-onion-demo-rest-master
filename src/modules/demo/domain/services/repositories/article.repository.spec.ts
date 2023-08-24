import { Test, TestingModule } from '@nestjs/testing';
import { ArticleRepository } from './article.repository';

describe('ArticleRepository', () => {
  let provider: ArticleRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleRepository],
    }).compile();

    provider = module.get<ArticleRepository>(ArticleRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
