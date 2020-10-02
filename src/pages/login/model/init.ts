import { sample } from 'effector';
import * as user from 'features/user';
import {
  $form,
  $errors,
  PageGate,
  formSubmitted,
  fieldChanged,
  signInFx,
} from './model';

$form.on(fieldChanged, (state, payload) => ({ ...state, ...payload }));

sample({
  source: $form,
  clock: formSubmitted,
  target: signInFx,
});

user.model.$user.on(signInFx.doneData, (_, payload) => payload);

$errors
  .on(signInFx.failData, (_, payload) => payload)
  .reset(fieldChanged, PageGate.close);
