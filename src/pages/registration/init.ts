import { forward } from 'effector';
import { authModel } from '../../core/auth';
import * as model from './model';

forward({
  from: model.formSubmitted,
  to: model.fxSignUp,
});

authModel.$authorizedUser.on(model.fxSignUp.doneData, (_, { user }) => user);
