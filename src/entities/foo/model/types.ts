import * as http from '@/shared/http';

export type Author = {
  username: string;
  bio: null | string;
  image: string;
  following: boolean;
};

export interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}

export type ArticleResponse = {
  article: Article;
};

export type FailData = {
  errors: Record<string, unknown>;
};

export type ArticleError = http.types.IHttpClientError<FailData>;
