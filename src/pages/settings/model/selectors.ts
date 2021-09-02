import { useStore } from 'effector-react';
import { changeUserDataFx } from './model';

export const useOnSubmitPending = (): boolean =>
  useStore(changeUserDataFx.pending);
