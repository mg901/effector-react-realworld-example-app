import { Event, Effect, Store } from 'effector';
import { Gate } from 'effector-react';
import * as types from '../../types';

export type Feed = Readonly<{
  articles: readonly types.Article[];
  articlesCount: number;
}>;

export type FavoriteArticle = Readonly<{
  article: types.Article;
}>;

export type UnfavoriteArticle = FavoriteArticle;

export type Options = Readonly<{
  currentPage?: number;
  pageSize?: number;
}>;

export type CreateFeedModel = Readonly<{
  PageGate: Gate<unknown>;
  currentPageWasSet: Event<number>;
  favoriteToggled: Event<types.Article>;
  setFavoriteArticleFx: Effect<string, FavoriteArticle, Error>;
  setUnfavoriteArticleFx: Effect<string, UnfavoriteArticle, Error>;
  $pageSize: Store<number>;
  $currentPage: Store<number>;
  $currentTag: Store<string>;
  $feed: Store<Feed>;
  $articles: Store<Feed['articles']>;
  $totalPages: Store<Feed['articlesCount']>;
}>;
