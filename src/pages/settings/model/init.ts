import { sample } from 'effector';
import { model } from 'features/user';
import * as router from 'library/router';
import {
  PageGate,
  $user,
  $errors,
  formSubmitted,
  fieldChanged,
  changeUserDataFx,
} from './model';

$user.on(fieldChanged, (state, payload) => ({
  ...state,
  ...payload,
}));

sample({
  source: $user,
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
  .on(changeUserDataFx.failData, (_, error) => error.response?.data)
  .reset(fieldChanged, PageGate.close);
