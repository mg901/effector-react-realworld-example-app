import { sample } from 'effector';
import * as auth from 'features/user';
import { $form, $errors, formSubmitted, fieldChanged, signUpFx } from './model';

formSubmitted.watch((e) => e.preventDefault());

$form.on(fieldChanged, (state, payload) => ({ ...state, ...payload }));

sample({
  source: $form,
  clock: formSubmitted,
  target: signUpFx,
});

auth.model.$user.on(signUpFx.doneData, (_, payload) => payload);

$errors.on(signUpFx.failData, (_, payload) => payload).reset(signUpFx.done);
