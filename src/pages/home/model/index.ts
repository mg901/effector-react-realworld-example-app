import { sample, createEffect } from 'effector';
import { createGate } from 'effector-react';
import * as user from 'shared/user';
import * as router from 'router';

const changeHistoryFx = createEffect((isAuth: boolean) => {
  const path = isAuth ? 'your-feed' : 'global-feed';

  router.model.history.push(`/home/${path}`);
});

export const Gate = createGate();

sample({
  source: user.model.$isAuthorized,
  clock: [Gate.open, user.model.$isAuthorized],
  target: changeHistoryFx,
});
