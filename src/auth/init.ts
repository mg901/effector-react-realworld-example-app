import { createStore, sample, forward } from 'effector';
import { $token, $authorizedUser, $responseFail } from './state';
import { signIn, signUp, loggedOut } from './events';
import {
  fxSignUp,
  fxSignIn,
  fxFetchAuthUser,
  fxGetTokenFromLoSt,
  fxRemveTokenFromLoSt,
  fxSetTokenToLoST,
} from './effects';
import { Form } from './types';

fxGetTokenFromLoSt();

export const $form = createStore<Form>({
  email: '',
  password: '',
  username: '',
});

$token.on(fxGetTokenFromLoSt.doneData, (_, payload) => payload);
$authorizedUser.on(
  [fxSignIn.doneData, fxSignUp.doneData, fxFetchAuthUser.doneData],
  (_, { user }) => user,
);

sample({
  source: $form,
  clock: signIn,
  target: fxSignIn,
});

sample({
  source: $form,
  clock: signUp,
  target: fxSignUp,
});

forward({
  from: [fxSignIn.doneData, fxSignUp.doneData],
  to: fxSetTokenToLoST,
});

$responseFail
  .on([fxSignIn.failData, fxSignUp.failData], (_, payload) => payload)
  .reset(fxSignIn.done, fxSignUp.done);

loggedOut.watch(() => {
  fxRemveTokenFromLoSt();
});
