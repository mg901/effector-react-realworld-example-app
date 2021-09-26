import * as article from 'entities/article';

export type Comment = {
  author: article.types.Author;
  body: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type AddCommentFxArgs = Readonly<{
  slug: string;
  body: string;
}>;

export type DeleteCommentArgs = Readonly<{
  slug: string;
  id: string;
}>;
