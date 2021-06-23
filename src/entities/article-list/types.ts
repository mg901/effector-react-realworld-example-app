import { Store } from 'effector-root';

import { EffectState } from 'patronum/status';

export type Author = Readonly<{
  username: string;
  bio: null | string;
  image: string;
  following: boolean;
}>;

export type Article = Readonly<{
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
}>;

export type Feed = {
  articles: readonly Article[];
  articlesCount: number;
};

export type Options = Readonly<{
  currentPage?: number;
  pageSize?: number;
  status?: Store<EffectState>;
}>;
