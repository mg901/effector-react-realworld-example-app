import { createEffect } from 'effector';
import { get } from '../../api';
import { AuthUserResponse } from '../../auth';

export const fxFetchUser = createEffect({
  handler: () => get<AuthUserResponse>('/user'),
});

export const fxInitAuthApp = createEffect({
  handler: () =>
    Promise.all([
      fxFetchUser(),
      // fxFetchPersonalFeed(),
      // fxFetchTags()
    ]),
});

// export const fxIntitNotAuthApp = createEffect({
//   handler: () => Promise.all([fxFetchGlobalFeed(), fxFetchTags()]),
// });
