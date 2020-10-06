import { sample, forward } from 'effector';
import { FormGate, form, formSubmitted, $errors, signUpFx } from '.';
import { $user } from '../../../features/user';

formSubmitted.watch((e) => e.preventDefault());

// submit form
sample({
  source: form.$values,
  clock: formSubmitted,
  target: signUpFx,
});

// reset form
forward({
  from: FormGate.close,
  to: form.reset,
});

$user.on(signUpFx.doneData, (_, payload) => payload);

$errors
  .on(signUpFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, FormGate.close);
