import { sample } from 'effector';
import { model } from 'features/current-user';
import * as router from 'library/router';
import {
  $errors,
  formSubmitted,
  fieldChanged,
  changeUserDataFx,
} from './model';

model.$user.on(fieldChanged, (state, payload) => ({
  ...state,
  ...payload,
}));

sample({
  source: model.$user,
  clock: formSubmitted,
  target: changeUserDataFx,
});

changeUserDataFx.done.watch(() => {
  window.location.reload();
});

model.loggedOutClicked.watch(() => {
  router.model.history.push('/');
});

$errors
  .on(changeUserDataFx.failData, (_, payload) => payload)
  .reset(fieldChanged);
