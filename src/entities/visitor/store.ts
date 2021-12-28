import { createEffect, createEvent, restore, forward, guard } from 'effector';
import { useStore } from 'effector-react';
import { persist } from 'effector-storage/local';
import { TOKEN_NAME } from '@/shared/constants';
import { setToken } from '@/shared/http';
import * as api from './api';

export const logout = createEvent<React.MouseEvent>();
export const getVisitorFx = createEffect(api.getVisitor);

export const $visitor = restore(getVisitorFx.doneData, {
  bio: '',
  createdAt: '',
  email: '',
  id: null,
  image: '',
  token: null,
  updatedAt: '',
  username: '',
}).reset(logout);

export const $token = $visitor.map((visitor) => visitor.token);
export const $isAuthorized = $token.map(Boolean);

forward({
  from: guard({ source: $token, filter: Boolean }),
  to: createEffect(setToken),
});

persist({
  store: $token,
  key: TOKEN_NAME,
});

export const selectors = {
  useIsAuthorized: () => useStore($isAuthorized),
  useVisitor: () => useStore($visitor),
};
