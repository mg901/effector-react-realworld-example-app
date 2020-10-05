import { sample, forward } from 'effector';
import { model } from '../../../features/user';
import { FormGate, form, formSubmitted, $errors, signUpFx } from './model';

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

model.$user.on(signUpFx.doneData, (_, payload) => payload);

$errors
  .on(signUpFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, FormGate.close);
