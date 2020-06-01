import { forward } from 'effector';
import { fxGetTokenFromLoSt } from '../../auth';
import { RootGate } from './gates';

forward({
  from: RootGate.open,
  to: fxGetTokenFromLoSt,
});
