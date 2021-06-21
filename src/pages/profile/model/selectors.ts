import { useStore } from 'effector-react';
import {
  $username,
  $profile,
  $isCurrentUser,
  $isAnotherUser,
  $following,
} from './model';
import { Profile } from './types';

export const useUsername = (): string => useStore($username);
export const useProfile = (): Profile => useStore($profile);
export const useIsCurrentUser = (): boolean => useStore($isCurrentUser);
export const useIsAnotherUser = (): boolean => useStore($isAnotherUser);
export const useWhenFollow = (): boolean => useStore($following);
