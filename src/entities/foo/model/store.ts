import { createEffect } from 'effector';
import * as api from './api';
import * as types from './types';

export const createArticleFx = createEffect<
  types.Article,
  types.ArticleResponse,
  Record<string, unknown>
>(api.createArticle);
