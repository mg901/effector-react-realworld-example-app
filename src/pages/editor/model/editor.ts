import { createEvent, createEffect } from 'effector';

import * as article from 'entities/article';
import * as api from 'shared/api';
import { history } from 'shared/library/router';
import * as errorsList from 'widgets/error-list';

export const formSubmitted = createEvent();

export const tagDeleted = createEvent<string>();
export const createArticleFx = createEffect<
  article.types.Article,
  article.types.Article,
  api.types.ApiError
>((form) => {
  return api
    .post('articles', {
      article: form,
    })
    .then((x) => x.data.article);
});

export const getArticleFx = createEffect((slug: string) => {
  return api
    .get<{ article: article.types.Article }>(`articles/${slug}`)
    .then(({ data }) => data.article);
});

createArticleFx.doneData.watch(({ slug }) => {
  history.replace(`/article/${slug}`);
});

errorsList.model.$errors.on(
  createArticleFx.failData,
  (_, error) => error.response?.data,
);
