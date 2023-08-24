import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ARTICLE_SERVICE,
  IArticleService,
} from 'src/modules/demo/application/interfaces';
import { CreateArticleDto, UpdateArticleDto } from '../../dtos';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '@aduana/sen-onion-core/dist/common/guards';
import { User } from '@aduana/sen-onion-core';

/**
 * La clase ArticleController es un controlador que maneja operaciones CRUD para
 * artículos, incluida la creación, recuperación, actualización y eliminación de artículos.
 *
 * @author Aduana Nacional
 * @version 2.0
 * @since 20-07-2023
 */
@ApiTags('ARTICLE')
@Controller({ path: 'article' })
export class ArticleController {
  constructor(
    @Inject(ARTICLE_SERVICE)
    private readonly serviceArticle: IArticleService,
  ) {}

  @Post()
  async createArticle(@Body() pArticle: CreateArticleDto) {
    return await this.serviceArticle.createArticle(pArticle);
  }

  @Get()
  async getArticles() {
    return await this.serviceArticle.getArticles();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT')
  async getArticle(@User() user: any, @Param('id', ParseIntPipe) pId: number) {
    console.log(user);
    return await this.serviceArticle.getArticle(pId);
  }

  @Put(':id')
  async updateArticle(
    @Param('id', ParseIntPipe) id: number,
    @Body() pArticle: UpdateArticleDto,
  ) {
    return await this.serviceArticle.updateArticle(id, pArticle);
  }
}
