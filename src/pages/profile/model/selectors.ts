import { useStore } from 'effector-react';
import {
  $following,
  $isCurrentUser,
  $isNotCurrentUser,
  $profile,
} from './model';

import { Profile } from './types';

export const useIsCurrentUser = (): boolean => useStore($isCurrentUser);
export const useFollowing = (): boolean => useStore($following);
export const useIsNotCurrentUser = (): boolean => useStore($isNotCurrentUser);
export const useProfile = (): Profile => useStore($profile);
