import { forward } from 'effector';
import * as auth from 'features/user';
import { formSubmitted, signInFx } from './model';

forward({
  from: formSubmitted,
  to: signInFx,
});

auth.model.$authorizedUser.on(signInFx.doneData, (_, payload) => payload);
