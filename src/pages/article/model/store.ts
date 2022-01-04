import { createEvent, createEffect, restore, combine, forward } from 'effector';
import { useStore } from 'effector-react';

import * as visitor from '@/entities/visitor';
import { history } from '@/shared/history';
import * as api from './api';

export const articleDeleted = createEvent<string>();
export const getArticleFx = createEffect(api.getArticle);
export const deleteArticleFx = createEffect(api.deleteArticle);
export const navigateToRootFx = createEffect(() => {
  history.push('/');
});

export const $article = restore(getArticleFx.doneData, {
  title: '',
  slug: '',
  body: '',
  createdAt: '',
  updatedAt: '',
  tagList: [],
  description: '',
  author: {
    username: '',
    bio: '',
    image: '',
    following: false,
  },
  favorited: false,
  favoritesCount: 0,
});

export const $canModify = combine(
  $article,
  visitor.$visitor,
  ({ author }, user) => author.username === user.username,
);

forward({
  from: articleDeleted,
  to: deleteArticleFx,
});

forward({
  from: deleteArticleFx.done,
  to: navigateToRootFx,
});

export const selectors = {
  useGetArticlePending: () => useStore(getArticleFx.pending),
  useCanModify: () => useStore($canModify),
  useArticle: () => useStore($article),
};
