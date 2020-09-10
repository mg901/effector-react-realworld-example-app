import { Author } from '../../types';

export type Article = Readonly<{
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: readonly string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}>;

export type Feed = Readonly<{
  articles: readonly Article[];
  articlesCount: number;
}>;
