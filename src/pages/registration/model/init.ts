import { forward } from 'effector';
import { fxSignUp, fxGetTokenFromLoSt } from '../../../auth';
import { history } from '../../../router';
import { submitForm } from './events';

forward({
  from: submitForm,
  to: fxSignUp,
});

fxSignUp.done.watch(() => {
  history.push('/');
  fxGetTokenFromLoSt();
});
