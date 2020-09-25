import { types } from 'features/feed';

export type Article = types.Article;

export type GetArticleFxDone = Readonly<{
  article: types.Article;
}>;
