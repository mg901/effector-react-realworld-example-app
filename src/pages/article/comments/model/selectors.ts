import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { addCommentFx, $error } from './comments';

export const useAddCommentPending = (): boolean =>
  useStore(addCommentFx.pending);

export const useError = (): StoreValue<typeof $error> => useStore($error);
