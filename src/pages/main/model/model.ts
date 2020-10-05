import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import { request } from '../../../api';
import * as user from '../../../features/user';
import { removeNotASCII } from '../../../library/ascii';
import * as types from './types';

export const PageGate = createGate();

export const fetchUserFx = createEffect(() =>
  request.get<{ user: user.types.User }>('user').then((x) => x.data.user),
);

export const getTagsFx = createEffect(() =>
  request.get<types.getTagsFxDone>('tags').then((x) => x.data.tags),
);

export const initAuthAppFx = createEffect(() =>
  Promise.all([fetchUserFx(), getTagsFx()]),
);

export const $tags = createStore<types.TagList>([]);

export const $validTags = $tags.map((tags) => tags.filter(removeNotASCII));
