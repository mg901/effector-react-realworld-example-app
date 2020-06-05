import { forward } from 'effector';
import { $authorizedUser } from '../../auth';
import { formSubmitted, fxSignUp } from './model';

forward({
  from: formSubmitted,
  to: fxSignUp,
});

$authorizedUser.on(fxSignUp.doneData, (_, { user }) => user);
