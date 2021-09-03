import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import * as model from './model';

export const useCurrentPage = (): StoreValue<typeof model.$currentPage> =>
  useStore(model.$currentPage);

export const useTotalPages = (): StoreValue<typeof model.$totalPages> =>
  useStore(model.$totalPages);
