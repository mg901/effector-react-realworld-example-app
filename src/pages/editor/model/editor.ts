import { createEvent, createEffect, createStore } from 'effector';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { history } from 'shared/library/router';

export const formSubmitted = createEvent();

export const tagDeleted = createEvent<string>();
export const createArticleFx = createEffect<
  article.types.Article,
  article.types.Article,
  api.types.ApiError<Record<string, unknown>>
>((form) => {
  return api
    .post<{ article: article.types.Article }>('articles', {
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

export const $error = createStore<Record<string, unknown>>({
  errors: {},
}).on(createArticleFx.failData, (_, error) => error.response?.data);

export const $hasError = $error.map((x) => Object.keys(Object(x)).length > 0);
export const $errors = $error.map((x) => Object.entries(Object(x?.errors)));
