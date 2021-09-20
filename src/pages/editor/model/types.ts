import * as article from 'entities/article';

export type GateState = Readonly<{
  slug: string;
}>;

export type Form = Pick<
  article.types.Article,
  'slug' | 'title' | 'description' | 'body' | 'tagList'
>;
