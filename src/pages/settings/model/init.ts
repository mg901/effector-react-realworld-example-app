import { sample } from 'effector';
import { model } from 'features/user';
import * as router from 'library/router';
import {
  FormGate,
  form,
  $user,
  $errors,
  formSubmitted,
  changeUserDataFx,
} from './model';

formSubmitted.watch((e) => e.preventDefault());

// set data form user store
sample({
  source: $user,
  clock: FormGate.open,
  target: form.set,
});

// submit form
sample({
  source: form.$values,
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
  .reset(form.$values, FormGate.close);
