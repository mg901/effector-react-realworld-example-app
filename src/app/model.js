import { createEffect } from 'effector';
import { getUserFeed, getGlobalFeed } from '../feed/model.events';
import { getTags } from '../tags/model';

export const initAuthApp = createEffect().use(() =>
  Promise.all([getUserFeed(), getTags()]),
);

export const intitNotAuthApp = createEffect().use(() =>
  Promise.all([getGlobalFeed(), getTags()]),
);
