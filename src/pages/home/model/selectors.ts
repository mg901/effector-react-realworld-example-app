import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { getTagsFx, $currentTag } from './home';

export const useLoadTags = (): boolean => useStore(getTagsFx.pending);

export const useCurrentTag = (): StoreValue<typeof $currentTag> =>
  useStore($currentTag);
