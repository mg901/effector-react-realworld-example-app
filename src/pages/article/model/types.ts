import * as types from 'features/types';

export type Article = types.Article;

export type GetArticleFxDone = Readonly<{
  article: types.Article;
}>;
