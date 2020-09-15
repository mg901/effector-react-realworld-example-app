import { forward } from 'effector';
import { authModel } from '../../auth';
import { formSubmitted, fxSignIn } from './model';

forward({
  from: formSubmitted,
  to: fxSignIn,
});

authModel.$authorizedUser.on(fxSignIn.doneData, (_, { user }) => user);
