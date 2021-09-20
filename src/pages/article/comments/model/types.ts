import * as article from 'entities/article';

export type Comment = Readonly<{
  author: article.types.Author;
  body: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}>;

export type Comments = readonly Comment[];

export type AddCommentFxArgs = Readonly<{
  slug: string;
  body: string;
}>;

export type DeleteCommentFxArgs = Readonly<{
  slug: string;
  id: string;
}>;
