import { createEvent, createEffect, restore, combine, forward } from 'effector';
import { useStore } from 'effector-react';

import * as visitor from 'entities/visitor';
import { history } from 'shared/library/router';
import * as endpoints from './endpoints';

export const articleDeleted = createEvent<string>();
export const getArticleFx = createEffect(endpoints.getArticle);
export const deleteArticleFx = createEffect(endpoints.deleteArticle);

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

deleteArticleFx.done.watch(() => {
  history.push('/');
});

export const selectors = {
  useGetArticlePending: () => useStore(getArticleFx.pending),
  useCanModify: () => useStore($canModify),
  useArticle: () => useStore($article),
};
