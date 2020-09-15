import { forward } from 'effector';
import * as auth from '../../features/auth';
import { formSubmitted, fxSignIn } from './model';

forward({
  from: formSubmitted,
  to: fxSignIn,
});

auth.model.$authorizedUser.on(fxSignIn.doneData, (_, { user }) => user);
