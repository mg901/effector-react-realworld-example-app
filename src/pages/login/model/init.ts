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

$form
  .on(fieldChanged, (state, payload) => ({ ...state, ...payload }))
  .reset(PageGate.close);

sample({
  source: $form,
  clock: formSubmitted,
  target: signInFx,
});

user.model.$user.on(signInFx.doneData, (_, payload) => payload);

signInFx.failData.watch((x) => x.config.data);

$errors
  .on(signInFx.failData, (_, error) => error.response?.data)
  .reset(fieldChanged, PageGate.close);
