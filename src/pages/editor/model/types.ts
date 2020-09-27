import { types } from 'features/feed';

export type Form = Readonly<{
  articleSlug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
}>;

export type ErrorType = Readonly<{
  errors: readonly string[];
}>;

export type CreateArticleFxDone = Readonly<{
  article: types.Article;
}>;
