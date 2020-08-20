import { Location, History } from 'history';
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

export type SetPageToQueryParamArgs = {
  pathname: Location<History.PoorMansUnknown>['pathname'];
  search: Location<History.PoorMansUnknown>['search'];
  page: number;
};

export type GetFeedByTagArgs = {
  tag: string;
  page: number;
};
