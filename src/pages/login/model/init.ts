import { sample, forward } from 'effector';
import * as user from 'features/user';
import { form, $errors, PageGate, formSubmitted, signInFx } from './model';

formSubmitted.watch((e) => e.preventDefault());

// submit form
sample({
  source: form.$values,
  clock: formSubmitted,
  target: signInFx,
});

// reset form
forward({
  from: PageGate.close,
  to: form.reset,
});

user.model.$user.on(signInFx.doneData, (_, payload) => payload);

$errors
  .on(signInFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, PageGate.close);
