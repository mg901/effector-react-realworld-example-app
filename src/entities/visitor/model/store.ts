import { createEffect, createEvent, restore, forward, guard } from 'effector';
import { useStore } from 'effector-react';
import { persist } from 'effector-storage/local';
import { TOKEN_NAME } from '@/shared/config';
import * as http from '@/shared/http';
import * as api from './api';

export const logout = createEvent();
export const getVisitorFx = createEffect(api.getVisitor);
const setTokenFx = createEffect(http.setToken);

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

export const $username = $visitor.map((visitor) => visitor.username);
export const $image = $visitor.map((visitor) => visitor.image);

export const $token = $visitor.map((visitor) => visitor.token);
export const $isAuthorized = $token.map(Boolean);

persist({
  store: $username,
  key: 'visitor-username',
});

persist({
  store: $image,
  key: 'visitor-image',
});

forward({
  from: guard({
    source: $token,
    filter: Boolean,
  }),
  to: setTokenFx,
});

persist({
  store: $token,
  key: TOKEN_NAME,
});

export const selectors = {
  useIsAuthorized: () => useStore($isAuthorized),
  useUserName: () => useStore($username),
  useImage: () => useStore($image),
  useVisitor: () => useStore($visitor),
};
