import { createStore, sample, forward, combine } from 'effector';
import { $token, $authUser, $responseFail } from './state';
import { textChanged, signIn, signUp, loggedOut } from './events';
import {
  fxSignUp,
  fxSignIn,
  fxFetchAuthUser,
  fxGetTokenFromLoSt,
  fxRemveTokenFromLoSt,
  fxIntitNotAuthApp,
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
$authUser.on(
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
  fxIntitNotAuthApp();
});
