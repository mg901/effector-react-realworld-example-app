import { sample } from 'effector';
import * as user from 'features/user';
import { formSubmitted, $form, fieldChanged, signInFx } from './model';

formSubmitted.watch((e) => e.preventDefault());

$form.on(fieldChanged, (state, payload) => ({ ...state, ...payload }));

sample({
  source: $form,
  clock: formSubmitted,
  target: signInFx,
});

user.model.$authorizedUser.on(signInFx.doneData, (_, payload) => payload);
