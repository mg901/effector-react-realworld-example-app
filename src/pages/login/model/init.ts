import { forward } from 'effector';
import { $authorizedUser } from '../../../auth';
import { formSubmitted, fxSignIn } from '.';

forward({
  from: formSubmitted,
  to: fxSignIn,
});

$authorizedUser.on(fxSignIn.doneData, (_, { user }) => user);
