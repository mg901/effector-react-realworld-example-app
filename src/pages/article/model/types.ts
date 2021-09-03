import * as article from 'entities/article';

export type GateState = Readonly<{
  slug: string;
}>;

export type FetchArticleFxDone = Readonly<{
  article: article.types.Article;
}>;
