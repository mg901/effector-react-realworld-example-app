import { createDomain } from 'effector';
import * as types from './types';

export const domain = createDomain('article');

export const $feed = domain.createStore<types.Feed>({
  articles: [],
  articlesCount: 0,
});
