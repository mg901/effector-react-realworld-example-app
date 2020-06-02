import { forward } from 'effector';
import { $token, $authorizedUser, $responseFail } from './state';
import { loggedOut } from './events';
import {
  fxSignUp,
  fxSignIn,
  fxFetchAuthUser,
  fxGetTokenFromLoSt,
  fxSetTokenToLoST,
} from './effects';

$token.on(fxGetTokenFromLoSt.doneData, (_, payload) => payload);
$authorizedUser.on(
  [fxSignIn.doneData, fxSignUp.doneData, fxFetchAuthUser.doneData],
  (_, { user }) => user,
);

forward({
  from: [fxSignIn.doneData, fxSignUp.doneData],
  to: fxSetTokenToLoST,
});

$responseFail
  .on([fxSignIn.failData, fxSignUp.failData], (_, payload) => payload)
  .reset(fxSignIn.done, fxSignUp.done);
