import { useStore } from 'effector-react';
import { addCommentFx } from './comments';

export const useAddCommentPending = (): boolean =>
  useStore(addCommentFx.pending);
