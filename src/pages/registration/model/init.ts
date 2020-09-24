import { sample } from 'effector';
import * as auth from 'features/user';
import { $form, formSubmitted, fieldChanged, fxSignUp } from './model';

formSubmitted.watch((e) => e.preventDefault());

$form.on(fieldChanged, (state, payload) => ({ ...state, ...payload }));

sample({
  source: $form,
  clock: formSubmitted,
  target: fxSignUp,
});

auth.model.$authorizedUser.on(fxSignUp.doneData, (_, payload) => payload);
