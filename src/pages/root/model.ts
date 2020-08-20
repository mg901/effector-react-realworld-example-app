import { createEffect, restore } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../api';
import { $location } from '../../core/router';
import { authTypes } from '../../core/auth';
import { getYourFeedFx } from '../home/model/your-feed.model';
import { getGlobalFeedFx } from '../home/model/global-feed.model';
import { Tags } from './types';

export const RootGate = createGate();

export const $$currentTag = $location.map((x) =>
  new URLSearchParams(x.search).get('name'),
);

export const getUserFx = createEffect({
  handler: () => get<authTypes.AuthUserResponse>('/user'),
});

export const getTagsFx = createEffect({
  handler: () => get<Tags>('/tags'),
});

export const initAuthAppFx = createEffect({
  handler: () => Promise.all([getUserFx(), getYourFeedFx(), getTagsFx()]),
});

export const intitNotAuthAppFx = createEffect({
  handler: () => Promise.all([getGlobalFeedFx(), getTagsFx()]),
});

export const $tags = restore(
  getTagsFx.doneData.map((x) => x.tags),
  [],
);
