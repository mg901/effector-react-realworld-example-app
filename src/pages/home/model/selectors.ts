import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { fetchTagsFx, $currentTag } from './model';

export const useLoadTags = (): StoreValue<typeof fetchTagsFx.pending> =>
  useStore(fetchTagsFx.pending);

export const useCurrentTag = (): StoreValue<typeof $currentTag> =>
  useStore($currentTag);
