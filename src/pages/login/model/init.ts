import { forward } from 'effector';
import { history } from '../../../router';
import { fxSignIn, fxGetTokenFromLoSt } from '../../../auth';
import { submitForm } from './events';

forward({
  from: submitForm,
  to: fxSignIn,
});

fxSignIn.done.watch(() => {
  history.push('/');
  fxGetTokenFromLoSt();
});
