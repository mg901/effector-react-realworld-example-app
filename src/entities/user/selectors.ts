import { useStore } from 'effector-react';
import { $isAuthorized } from './model';

export const useIsAuth = (): boolean => useStore($isAuthorized);
