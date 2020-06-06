import { createEffect } from 'effector';

export const fxInitAuthApp = createEffect({
  handler: () =>
    Promise.all([
      // fxFetchUser(), fxFetchPersonalFeed(), fxFetchTags()
    ]),
});

// export const fxIntitNotAuthApp = createEffect({
//   handler: () => Promise.all([fxFetchGlobalFeed(), fxFetchTags()]),
// });
