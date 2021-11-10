import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { $isAuthorized, $visitor } from './visitor';

export const useIsAuth = (): StoreValue<typeof $isAuthorized> =>
  useStore($isAuthorized);
export const useVisitor = (): StoreValue<typeof $visitor> => useStore($visitor);
