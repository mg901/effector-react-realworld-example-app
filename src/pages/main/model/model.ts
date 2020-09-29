import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as authUser from 'features/user';
import { removeNotASCII } from 'library/ascii';
import * as router from 'library/router';
import * as types from './types';

export const PageGate = createGate();

export const $$currentTag = router.model.$location.map((x) =>
  new URLSearchParams(x.search).get('name'),
);

export const fetchUserFx = createEffect(() =>
  api.get<authUser.types.SignUpFxDone>('/user').then((x) => x.user),
);

export const getTagsFx = createEffect(() =>
  api.get<types.getTagsFxDone>('/tags').then((x) => x.tags),
);

export const initAuthAppFx = createEffect(() =>
  Promise.all([fetchUserFx(), getTagsFx()]),
);

export const $tags = createStore<types.TagList>([]);

export const $validTags = $tags.map((tags) => tags.filter(removeNotASCII));
