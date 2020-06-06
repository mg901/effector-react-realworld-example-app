import { createEffect } from 'effector';
import { get } from '../../api';
import { AuthUserResponse } from '../../auth';
import { fxFetchYourFeed } from '../your-feed';

export const fxFetchUser = createEffect({
  handler: () => get<AuthUserResponse>('/user'),
});

export const fxInitAuthApp = createEffect({
  handler: () =>
    Promise.all([
      fxFetchUser(),
      fxFetchYourFeed(),
      // fxFetchTags()
    ]),
});

// export const fxIntitNotAuthApp = createEffect({
//   handler: () => Promise.all([fxFetchGlobalFeed(), fxFetchTags()]),
// });
