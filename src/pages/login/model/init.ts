import { forward } from 'effector';
import * as auth from 'features/auth';
import { formSubmitted, signInFx } from './model';

forward({
  from: formSubmitted,
  to: signInFx,
});

auth.model.$authorizedUser.on(signInFx.doneData, (_, payload) => payload);
