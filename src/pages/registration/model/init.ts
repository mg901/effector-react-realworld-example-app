import { sample } from 'effector';
import { model } from 'features/user';
import {
  $form,
  $errors,
  PageGate,
  formSubmitted,
  fieldChanged,
  signUpFx,
} from './model';

$form
  .on(fieldChanged, (state, payload) => ({ ...state, ...payload }))
  .reset(PageGate.close);

sample({
  source: $form,
  clock: formSubmitted,
  target: signUpFx,
});

model.$user.on(signUpFx.doneData, (_, payload) => payload);

$errors
  .on(signUpFx.failData, (_, error) => error.response?.data)
  .reset(fieldChanged, PageGate.close);
