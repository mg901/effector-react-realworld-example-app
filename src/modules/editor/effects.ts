import { createEffect } from 'effector';
import { post, get } from '../../api';
import { Article, BackendError } from '../types';
import { Slug, NewArticle } from './types';

export const fxCreateArticle = createEffect<NewArticle, void, BackendError>({
  handler: (article) => {
    console.log('----------', article);

    return post<void>('/articles', { article });
  },
});

// export const updateArticle = createEffect<Article, void, Error>({
//   handler: (article) => put<void>(`/articles/${article.slug}`, article),
// });

export const getArticle = createEffect<Slug, Article, BackendError>({
  handler: (slug) => get<Article>(`/articles/${slug}`),
});
