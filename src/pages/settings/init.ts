import { sample } from 'effector';
import { $authorizedUser } from '../../auth';
import { fieldChanged, formSubmitted, changeAuthUserFx } from './model';

$authorizedUser.on(fieldChanged, (state, payload) => ({
  ...state,
  ...payload,
}));

sample({
  source: $authorizedUser,
  clock: formSubmitted,
  target: changeAuthUserFx,
});
