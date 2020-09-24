import { sample } from 'effector';
import * as auth from 'features/user';
import { formSubmitted, fieldChanged, changeAuthUserFx } from './model';

formSubmitted.watch((e) => e.preventDefault());

auth.model.$authorizedUser.on(fieldChanged, (state, payload) => ({
  ...state,
  ...payload,
}));

sample({
  source: auth.model.$authorizedUser,
  clock: formSubmitted,
  target: changeAuthUserFx,
});

changeAuthUserFx.done.watch(() => {
  window.location.reload();
});
