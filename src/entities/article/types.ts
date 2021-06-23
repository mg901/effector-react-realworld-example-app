import * as author from 'shared/entities/author';

export type Article = Readonly<{
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: author.types.Author;
  favorited: boolean;
  favoritesCount: number;
}>;
