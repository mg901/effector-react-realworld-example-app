import { Event, Store } from 'effector';

export type Author = Readonly<{
  username: string;
  bio: string;
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

export type CreateFeedModel = Readonly<{
  currentPageSetted: Event<number>;
  $currentPage: Store<number>;
  $currentTag: Store<string>;
  $feed: Store<Feed>;
  $articles: Store<Feed['articles']>;
  $totalPages: Store<Feed['articlesCount']>;
}>;
