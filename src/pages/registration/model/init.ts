import { forward } from 'effector';
import { history } from '../../../router';
import { $authorizedUser } from '../../../auth';
import { formSubmitted, fxSignUp } from '.';

forward({
  from: formSubmitted,
  to: fxSignUp,
});

$authorizedUser.on(fxSignUp.doneData, (_, { user }) => user);

fxSignUp.done.watch(() => {
  history.push('/');
});
