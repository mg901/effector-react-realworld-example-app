import { createEffect } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../api';
import { AuthUserResponse } from '../../auth';
import { getYourFeedFx } from '../your-feed';
import { fxFetchGlobalFeed } from '../global-feed';

export const RootGate = createGate();

export const fxFetchUser = createEffect({
  handler: () => get<AuthUserResponse>('/user'),
});

export const fxInitAuthApp = createEffect({
  handler: () =>
    Promise.all([
      fxFetchUser(),
      getYourFeedFx(),
      // fxFetchTags()
    ]),
});

export const fxIntitNotAuthApp = createEffect({
  handler: () => Promise.all([fxFetchGlobalFeed()]),
});
