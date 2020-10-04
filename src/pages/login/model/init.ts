import { sample, forward } from 'effector';
import * as user from 'features/user';
import { form, $errors, FormGate, formSubmitted, signInFx } from './model';

formSubmitted.watch((e) => e.preventDefault());

// submit form
sample({
  source: form.$values,
  clock: formSubmitted,
  target: signInFx,
});

// reset form
forward({
  from: FormGate.close,
  to: form.reset,
});

user.model.$user.on(signInFx.doneData, (_, payload) => payload);

$errors
  .on(signInFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, FormGate.close);
