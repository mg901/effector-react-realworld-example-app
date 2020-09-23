import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as auth from 'features/user';
import { removeNotASCII } from 'library/ascii';
import * as router from 'library/router';
import * as types from './types';

export const PageGate = createGate();

export const $$currentTag = router.model.$location.map((x) =>
  new URLSearchParams(x.search).get('name'),
);

export const getUserFx = createEffect(() =>
  api
    .get<auth.types.AuthUserResponse>('/user')
    .then((response) => response.user),
);

export const getTagsFx = createEffect(() =>
  api.get<types.getTagsFxDone>('/tags').then((response) => response.tags),
);

export const initAuthAppFx = createEffect(() =>
  Promise.all([getUserFx(), getTagsFx()]),
);

export const $tags = createStore<types.TagList>([]);

export const $validTags = $tags.map((tags) => tags.filter(removeNotASCII));
