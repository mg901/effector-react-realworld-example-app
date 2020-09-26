import { sample } from 'effector';
import * as auth from 'features/user';
import * as router from 'library/router';
import {
  $errors,
  formSubmitted,
  fieldChanged,
  changeUserDataFx,
} from './model';

auth.model.$user.on(fieldChanged, (state, payload) => ({
  ...state,
  ...payload,
}));

sample({
  source: auth.model.$user,
  clock: formSubmitted,
  target: changeUserDataFx,
});

changeUserDataFx.done.watch(() => {
  window.location.reload();
});

auth.model.loggedOutClicked.watch(() => {
  router.model.history.push('/');
});

$errors
  .on(changeUserDataFx.failData, (_, payload) => payload)
  .reset(fieldChanged);
