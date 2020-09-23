import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as types from './types';

export const getArticleFx = createEffect((slug: string) =>
  api.get<types.Article>(`/articles/${slug}`),
);

export const getCommentFx = createEffect((slug: string) =>
  api
    .get<types.getCommentsFxDone>(`/articles/${slug}/comments`)
    .then((response) => response.comments),
);

getArticleFx.finally.watch((x) => console.log('article', x));

getCommentFx.finally.watch((x) => console.log('comments', x));

export const getPageDataFx = createEffect(({ id }: any) =>
  Promise.all([getArticleFx(id), getCommentFx(id)]),
);

export const PageGate = createGate<types.PageGateType>();
export const $article = createStore<types.Article>(null);
export const $comments = createStore<readonly types.Comment[]>([]);
