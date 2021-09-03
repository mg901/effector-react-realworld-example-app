import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { changeUserDataFx } from './model';

export const useOnSubmitPending = (): StoreValue<
  typeof changeUserDataFx.pending
> => useStore(changeUserDataFx.pending);
