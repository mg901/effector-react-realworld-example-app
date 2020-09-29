import { Event, Effect, Store } from 'effector';

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

export type FavoriteArticle = Readonly<{
  article: Article;
}>;

export type UnfavoriteArticle = FavoriteArticle;

export type Options = Readonly<{
  currentPage?: number;
  pageSize?: number;
}>;

export type CreateFeedModel = Readonly<{
  currentPageSettled: Event<number>;
  favoriteToggled: Event<Article>;
  setFavoriteArticleFx: Effect<string, FavoriteArticle, Error>;
  setUnfavoriteArticleFx: Effect<string, UnfavoriteArticle, Error>;
  $pageSize: Store<number>;
  $currentPage: Store<number>;
  $currentTag: Store<string>;
  $feed: Store<Feed>;
  $articles: Store<Feed['articles']>;
  $totalPages: Store<Feed['articlesCount']>;
}>;
