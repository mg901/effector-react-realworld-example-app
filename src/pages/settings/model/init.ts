import { sample } from 'effector';
import * as auth from '../../../features/auth';
import * as model from './model';

auth.model.$authorizedUser.on(model.fieldChanged, (state, payload) => ({
  ...state,
  ...payload,
}));

sample({
  source: auth.model.$authorizedUser,
  clock: model.formSubmitted,
  target: model.changeAuthUserFx,
});
