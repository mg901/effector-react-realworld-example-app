import { sample } from 'effector';
import { authModel } from '@core/auth';
import * as model from './model';

authModel.$authorizedUser.on(model.fieldChanged, (state, payload) => ({
  ...state,
  ...payload,
}));

sample({
  source: authModel.$authorizedUser,
  clock: model.formSubmitted,
  target: model.changeAuthUserFx,
});
