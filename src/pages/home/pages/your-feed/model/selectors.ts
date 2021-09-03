import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import * as model from './model';

export const useLoading = (): StoreValue<typeof model.fetchFeedFx.pending> =>
  useStore(model.fetchFeedFx.pending);

export const usePageSize = (): StoreValue<typeof model.$pageSize> =>
  useStore(model.$pageSize);

export const useIsEmptyFeed = (): StoreValue<typeof model.$isEmptyFeed> =>
  useStore(model.$isEmptyFeed);
