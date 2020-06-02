import { forward } from 'effector';

import { fxSignIn } from '../../../auth';
import { submitForm } from './events';

forward({
  from: submitForm,
  to: fxSignIn,
});
