import { useStore } from 'effector-react';
import { $user, $token, $isAuthorized } from './model';
import { User, Token } from './types';

export const useUser = (): User => useStore($user);
export const useToken = (): Token => useStore($token);
export const useIsAuth = (): boolean => useStore($isAuthorized);
