import { Event, Effect, Store, StoreValue } from 'effector';
import { Gate } from 'effector-react';
import { AxiosError } from 'axios';
import { EffectState } from 'patronum/status';
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
  status?: Store<EffectState>;
}>;

export type Model = Readonly<{
  PageGate: Gate<unknown>;
  currentPageWasSet: Event<number>;
  favoriteToggled: Event<types.Article>;
  setFavoriteArticleFx: Effect<string, FavoriteArticle, AxiosError>;
  setUnfavoriteArticleFx: Effect<string, UnfavoriteArticle, Error>;
  $feed: Store<Feed>;
  $articles: Store<Feed['articles']>;
  $pageSize: Store<number>;
  $currentPage: Store<number>;
  $currentTag: Store<string>;
  $totalPages: Store<Feed['articlesCount']>;
  $isEmptyFeed: Store<boolean>;
}>;

export type CreateFeedModel = Model & {
  useModel: () => {
    pageSize: StoreValue<Model['$pageSize']>;
    currentPage: StoreValue<Model['$currentPage']>;
    currentTag: StoreValue<Model['$currentTag']>;
    totalPages: StoreValue<Model['$totalPages']>;
    isEmptyFeed: StoreValue<Model['$isEmptyFeed']>;
  };
};
